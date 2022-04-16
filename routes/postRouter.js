const express = require('express');
const { 
  create, getAll, getById, update, destroy, search,
} = require('../controllers/postController');
const authToken = require('../middlewares/token/authToken');
const createValidation = require('../middlewares/validation/createPost');
const updateValidation = require('../middlewares/validation/updatePost');
const destroyValidation = require('../middlewares/validation/destroyPost');

const router = express.Router();

router.get('/', authToken, getAll);

router.get('/search', authToken, search);

router.get('/:id', authToken, getById);

router.post('/', authToken, createValidation, create);

router.put('/:id', authToken, updateValidation, update);

router.delete('/:id', authToken, destroyValidation, destroy);

module.exports = router;