const express = require('express');
const router = express.Router();
const homeController = require('../controllers/notes.controller');
router.get('/', homeController.home);

router.use('/notes', require('./notes'));

module.exports = router;