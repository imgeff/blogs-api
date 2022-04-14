const express = require('express');
const { create } = require('../controllers/categoryController');
const authToken = require('../middlewares/token/authToken');

const router = express.Router();

router.post('/', authToken, create);

module.exports = router;