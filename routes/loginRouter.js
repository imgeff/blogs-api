const express = require('express');
const login = require('../controllers/loginController');
const loginValidation = require('../middlewares/loginValidation');
const generateToken = require('../middlewares/generateToken');

const router = express.Router();

router.post('/', loginValidation, login, generateToken);

module.exports = router;