const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const {validateEmail, validatePassword, usedEmail} = require('../utils/validators');
const { generateSign } = require('../utils/jwt');

const login = async (req, res) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email})
        if(!userInfo) {
            return res.status(404).json({message: 'invalid email address'})
        }
        if(!bcrypt.compareSync(req.body.password, userInfo.password)){ 
            return res.status(404).json({message: 'invalid password'});
        }
        const token = generateSign(userInfo._id, userInfo.email)
        return res.status(200).json({userInfo});
    } catch (error) {
        return res.status(500).json(error)
    }
}

const register = async (req, res) => {
    try {
        const newUser = new User(req.body);
        if(!validateEmail(newUser.email)){
            return res.status(400).send({message: 'Email Invalido'});
        }
        // if(!validatePassword(newUser.password)){
        //     return res.status(400).send({message: 'Contraseña Incorrecta'});
        // }
        if(await usedEmail(newUser.email) > 0){
            return res.status(400).send({message: 'Email en uso'});
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();
        return res.status(201).json(createdUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const checkSession = async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {login, register, checkSession};