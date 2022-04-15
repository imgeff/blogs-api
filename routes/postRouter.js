const express = require('express');
const { create, getAll } = require('../controllers/postController');
const authToken = require('../middlewares/token/authToken');
const postValidation = require('../middlewares/validation/postValidation');

const router = express.Router();

router.get('/', authToken, getAll);

router.post('/', authToken, postValidation, create);

module.exports = router;