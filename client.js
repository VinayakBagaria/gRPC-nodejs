const grpc = require('grpc');

const PROTO_PATH = './todo.proto';

const TodoService = grpc.load(PROTO_PATH).TodoService;

const client = new TodoService(
  'http://127.0.0.1:50051',
  grpc.credentials.createInsecure()
);

module.exports = client;
