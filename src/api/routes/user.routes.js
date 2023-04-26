
const express = require('express');
const {login, register, checkSession} = require('../controllers/user.controllers');
const router = express.Router();
const {isAuth} = require('../middlewares/auth');

router.post('/login', login);
router.post('/register', register);
router.post('/checksession', [isAuth], checkSession);

module.exports = router;