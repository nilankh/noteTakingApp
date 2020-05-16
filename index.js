const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
// create express
const app = express();

// parse requests
app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content type
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server started on port ${port}`);
})