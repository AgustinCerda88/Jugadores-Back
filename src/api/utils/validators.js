// const User = require("../models/user.models");

// const validateEmail = (email) => {
//     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //Regex email

//     return regex.test(String(email).toLowerCase());
// }


// const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
//     return regex.test(String(password));
// }

// const usedEmail = async (email) => {
//     const users = await User.find({email: email})  
//     // console.log(users.length)
//     return users.length;
// }


// module.exports = {validateEmail, validatePassword, usedEmail};

