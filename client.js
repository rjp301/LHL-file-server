const net = require('net');
const { PORT, HOST } = require('./constants');

const conn = net.createConnection({
  host: 'localhost',
  port: 8080
});

conn.setEncoding("utf8");

