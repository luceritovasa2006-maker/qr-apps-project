
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/crear', controller.crear);
router.get('/listar', controller.listar);

module.exports = router;

