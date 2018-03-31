const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');

const {User} = require('./../server/models/user');
const {Todo} = require ('./../server/models/todo');

var id = '5abfb110b5cacdfed52671e8';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
Todo.remove({}).then((result => {
    console.log(result);
}));


// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: id}).then((todo) => {

});

Todo.findByIdAndRemove(id).then((todo) => {
    console.log(todo);
});