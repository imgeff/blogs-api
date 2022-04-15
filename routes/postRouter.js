const express = require('express');
const { create, getAll, getById } = require('../controllers/postController');
const authToken = require('../middlewares/token/authToken');
const postValidation = require('../middlewares/validation/postValidation');

const router = express.Router();

router.get('/', authToken, getAll);

router.get('/:id', authToken, getById);

router.post('/', authToken, postValidation, create);

module.exports = router;