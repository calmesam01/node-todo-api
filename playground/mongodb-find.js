// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');

  // db.collection('ToDos').find({
  //   _id: new ObjectID('5c21606a423000178852990c')}).toArray().then((docs) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   if (err) {
  //     console.log('Unable to fetch docs', err);
  //   }
  // });

  db.collection('Users').find({name: 'Sam', _id: new ObjectID('5c21f1966a43371367e87e7e')}).toArray().then((docs) => {
    console.log(`Users`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    if (err) {
      console.log('Unable to fetch docs', err);
    }
  });

  // db.close();
});
