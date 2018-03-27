const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');

const {User} = require('./../server/models/user');
const {Todo} = require ('./../server/models/todo');

// var id = '5abaac02b90501455c56782b11';
var idUser = '5aba3c9497d0944480053fb2';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// USER find by ID

User.findById(idUser).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User: ' , user);
}).catch((e) => {
    console.log(e);
});