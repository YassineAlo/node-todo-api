const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    db.collection('Users').deleteMany({name: 'Yassine'}).then((result) => {
        console.log(result);
    })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5ab94e770bd98b65d79b7cf1')
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});