// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');

  // db.collection('ToDos').findOneAndUpdate({_id: new ObjectID('5c21606a423000178852990c')},
  // {
  //   $set: {
  //   completed: false
  //   }
  // }, {returnOriginal: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({"_id" : new ObjectID("5c227af38e70cbf4c1c5fc31")},
  {
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then((result) => {
    console.log(result);
  });

  // db.close();
});
