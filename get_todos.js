const client = require('./client');

client.list({}, (error, todos) => {
  if (!error) {
    console.log('TodoList', todos);
  } else {
    console.error(error);
  }
});
