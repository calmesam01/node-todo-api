const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = '5c46c2d79d5533a700dec6b9';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

User.find({
  _id: id
}).then((users) => {
  console.log('Users', users);
});

User.findOne({
  _id: id
}).then((user) => {
  console.log('User', user);
});

User.findById(id).then((user) => {
  if (!user) {
    return console.log('No user found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
})
