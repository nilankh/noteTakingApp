const express = require('express');
const router = express.Router();

const notes = require('../controllers/notes.controller');

// Create a new note
router.post('/', notes.create);

// Retrieve all Notes
router.get('/', notes.findAll);

// Retrieve a single note with nodeid
router.get('/:noteId', notes.findOne);

// Update a Note with noteId
router.put('/:noteId', notes.update);

// Delete a Note with noteId
router.delete('/:noteId', notes.delete);

module.exports = router;