const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c483c93358bd8f87bceecc1'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5c483ca2358bd8f87bceecc3').then((todo) => {
  console.log(todo);
});
