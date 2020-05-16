const Note = require('../models/Schema');

// Create and save a new Note
module.exports.create = function(req, res){
    // validate request
    if(!req.body.content){
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // create a note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating the Note."
        });
    });
}

// Retrieve and return all notes from the database.
module.exports.findAll = function(req, res){
    Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
}

// Find a single note with a note id
module.exports.findOne = function(req, res){
    Note.findById(req.params.noteId)
    .then(note => {
        if(!note){
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error reterieving note with id " + req.params.noteId
        });
    });
}

// Update a note identified by the noteid in the request
module.exports.update = function(req, res){
    // Validate request
    if(!req.body.content){
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitle Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note){
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
    // The {new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
}

// Deleteing a note
// Delete a note with the specified noteid in the request
module.exports.delete = function(req, res){
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
}
