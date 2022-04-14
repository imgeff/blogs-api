const express = require('express');
const { create, getAll } = require('../controllers/categoryController');
const authToken = require('../middlewares/token/authToken');

const router = express.Router();

router.get('/', authToken, getAll);

router.post('/', authToken, create);

module.exports = router;