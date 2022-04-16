const express = require('express');
const { register, getAll, getById, destroy } = require('../controllers/userController');
const createValidation = require('../middlewares/validation/createUser');
const generateToken = require('../middlewares/token/generateToken');
const authToken = require('../middlewares/token/authToken');

const router = express.Router();

router.get('/', authToken, getAll);

router.get('/:id', authToken, getById);

router.post('/', createValidation, register, generateToken);

router.delete('/me', authToken, destroy);

module.exports = router;