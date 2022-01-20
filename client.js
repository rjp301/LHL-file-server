const net = require('net');

const conn = net.createConnection({
  host: 'localhost',
  port: 8080
});

conn.setEncoding("utf8")

