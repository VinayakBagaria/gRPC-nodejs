const grpc = require('grpc');
const uuid = require('uuid/v1');

const todoproto = grpc.load('todo.proto');

const server = new grpc.Server();

let todos = [];

server.addService(todoproto.TodoService.service, {
  list: (_, callback) => {
    callback(null, todos);
  },
  insert: (call, callback) => {
    let todo = call.request;
    todo.id = uuid();
    todos.push(todo);

    callback(null, todo);
  }
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());

console.log('server is running at 0.0.0.0:50051');

server.start();
