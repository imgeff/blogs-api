const express = require('express');
const { register } = require('../controllers/user');
const userValidation = require('../middlewares/userValidation');
const generateToken = require('../middlewares/generateToken');

const router = express.Router();

router.post('/', userValidation, register, generateToken);

module.exports = router;