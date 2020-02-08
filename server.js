const grpc = require('grpc');
const uuid = require('uuid/v1');

const todoproto = grpc.load('todo.proto');

const server = new grpc.Server();

server.addService(todoproto.TodoService.service, {
  list: (_, callback) => {
    callback(null, []);
  }
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());

console.log('server is running at 0.0.0.0:50051');

server.start();
