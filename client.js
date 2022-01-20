const net = require('net');
const readline = require('readline');
const { PORT, HOST } = require('./constants');

console.log("Connecting...");
const conn = net.createConnection({
  host: HOST,
  port: PORT
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

conn.setEncoding("utf8");

conn.on('connect', () => {
  console.log("Connection successful");
});

// Log all data from server
conn.on('data', data => {
  console.log(data);
});

// Monitor for command events and send to server
rl.on('line', command => {
  conn.on('close',process.exit);
  conn.write(command);
});