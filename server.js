const grpc = require('grpc');
const uuid = require('uuid/v1');

const todoproto = grpc.load('todo.proto');

const server = new grpc.Server();

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());

console.log('server is running at http://127.0.0.1:50051');

server.start();

server.addService(todoproto.TodoService.service, {
  list: (_, callback) => {
    callback(null, todos);
  }
});
