console.log("NODE!");

// express app
const express = require("express");
const app = express();
app.use( express.static('public') );

// http server
const http = require("http");
const hostname = '127.0.0.1'; // localhost
// const hostname = '10.209.7.106'; // localhost
const port = 3000;
const server = http.createServer( app );

// socket.io
const socket = require("socket.io");
const io = socket(server);

io.on("connection", newConnection);
function newConnection(sckt) {
  console.log( `_ new connection: ${sckt.id}` );
  sckt.on("connection_name", receive);
  function receive(data) {
    console.log(data);
    sckt.broadcast.emit("connection_name", data);
  }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});






//
