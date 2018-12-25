// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');

  // db.collection('Users').deleteMany({name: 'Sam'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c21f12c10430a13448a9a10')}).then((result) => {
    console.log(result);
  });

  // db.close();
});
