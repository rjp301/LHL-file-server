const net = require('net');
const fs = require('fs');
const server = net.createServer();
const { PORT, HOST } = require('./constants');

server.listen(PORT,() => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

server.on('connection', client => {
  console.log("Client connected");
  client.setEncoding('utf-8');
  client.write("Welcome to this file server. To view commands type 'help'.");

  client.on('data', command => {
    console.log(command);
   
    // help command
    if (command === 'help') {
      client.write("All Commands:\n  download <filename> (self explanatory)\n  list (lists all files available)\n  help (see this again)");
   
      // list command 
    } else if (command.toLowerCase().startsWith("list")) {
      let allFiles = "All Available Files:";
      fs.readdir('./server_files', (err, files) => {
        files.forEach((file,index) => allFiles += `\n ${index}  ${file}`);
        client.write(allFiles);
      });

      // download command
    } else if (command.toLowerCase().startsWith("download ")) {
      const fname = command.replace(/download /, '');
      client.write(fname);

      // check validity of file name
      // how do I send a file rather than print to console? header?
      // if file name is valid send to client

      // any other peice of text
    } else {
      client.write(`${command} is not a valid command`);
    }

  });

  client.on('close', () => console.log("Client disconnected"));

});