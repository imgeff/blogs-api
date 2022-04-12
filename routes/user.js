const express = require('express');
const { register } = require('../controllers/user');
const userValidation = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', userValidation, register);

module.exports = router;