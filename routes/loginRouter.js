const express = require('express');
const login = require('../controllers/loginController');
const loginValidation = require('../middlewares/validation/login');
const generateToken = require('../middlewares/token/generateToken');

const router = express.Router();

router.post('/', loginValidation, login, generateToken);

module.exports = router;