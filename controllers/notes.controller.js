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

}

// Find a single note with a note id
module.exports.findOne = function(req, res){

}

// Update a note identified by the noteid in the request
module.exports.update = function(req, res){

}

// Delete a note with the specified noteid in the request
module.exports.delete = function(req, res){

}
