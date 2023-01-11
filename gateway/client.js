const PROTO_PATH = "/home/ritesh/logrocket-node-grpc-crud/customers.proto";

const grpc = require("grpc");
const path = require("path");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const CustomerService =
  grpc.loadPackageDefinition(packageDefinition).CustomerService;
const client = new CustomerService(
  "localhost:30043",
  grpc.credentials.createInsecure()
);

module.exports = client;
