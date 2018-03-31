var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // isValid
    if (!ObjectID.isValid(id)) {
        console.log('Invalid ObjectID');
        return res.status(404).send();
    }
    
    Todo.findById(id).then((todo) => {
        if (todo) {
            res.status(200).send({todo});
        } else {
            res.status(404).send();
            console.log('Unable to find the oject with id: ', id);
        }
    }).catch((e) => {
        res.status('404').send();
        console.log('An error as occurred while fetching the data')
    });
    // findById
        //success
            // if todo - send it back
            // if no todo - send back 404 with empty body
        //error
            //404 - send back nothing
    
});


app.listen(3000, () => {
    console.log('Started on port 3000')
});

module.exports = {app};