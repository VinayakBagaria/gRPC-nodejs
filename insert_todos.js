const client = require('./client');

let newTodo = {
  title: 'New Checklist',
  iscompleted: false
};

client.insert(newTodo, (error, todo) => {
  if (!error) {
    console.log('New Todo inserted succesfully');
  } else {
    console.error(error);
  }
});
