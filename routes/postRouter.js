const express = require('express');
const { create } = require('../controllers/postController');
const authToken = require('../middlewares/token/authToken');
const postValidation = require('../middlewares/validation/postValidation');

const router = express.Router();

router.post('/', authToken, postValidation, create);

module.exports = router;