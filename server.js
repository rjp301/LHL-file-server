const net = require('net');
const server = net.createServer();
const { PORT, HOST } = require('./constants');

server.listen(PORT,() => {
  console.log(`Server listening on port ${PORT}`);
});

server.on('connection', client => {
  console.log("A client has connected");
  client.write("Welcome to this file serve")

});