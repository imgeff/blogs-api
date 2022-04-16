const express = require('express');
const { register, getAll, getById } = require('../controllers/userController');
const createValidation = require('../middlewares/validation/createUser');
const generateToken = require('../middlewares/token/generateToken');
const authToken = require('../middlewares/token/authToken');

const router = express.Router();

router.get('/', authToken, getAll);

router.get('/:id', authToken, getById);

router.post('/', createValidation, register, generateToken);

module.exports = router;