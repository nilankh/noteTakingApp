const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// router.use('/notes', require('./notes'));

module.exports = router;