const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/user', controller.register);

module.exports = router;