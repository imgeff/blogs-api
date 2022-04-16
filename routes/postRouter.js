const express = require('express');
const { create, getAll, getById, update } = require('../controllers/postController');
const authToken = require('../middlewares/token/authToken');
const createValidation = require('../middlewares/validation/createPost');
const updateValidation = require('../middlewares/validation/updatePost');

const router = express.Router();

router.get('/', authToken, getAll);

router.get('/:id', authToken, getById);

router.post('/', authToken, createValidation, create);

router.put('/:id', authToken, updateValidation, update);

module.exports = router;