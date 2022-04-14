const express = require('express');
const { register, getAll, getById } = require('../controllers/userController');
const userValidation = require('../middlewares/userValidation');
const generateToken = require('../middlewares/generateToken');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.get('/', authToken, getAll);

router.get('/:id', authToken, getById);

router.post('/', userValidation, register, generateToken);

module.exports = router;