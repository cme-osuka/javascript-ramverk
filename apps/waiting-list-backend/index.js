const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);

const { Server } = socketio;
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const waitingList = [];
const recent = waitingList.slice(Math.max(waitingList.length - 20, 0));

function id() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
/**
 * Msg:
 * timestamp: date
 * name: string
 * room: string
 * color: string
 */

app.get("/", (req, res) => {
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("help", (req) => {
    if (!req.timestamp || !req.name || !req.room || !req.color) {
      return socket.emit("error", "Must send timestamp, name, room");
    }

    waitingList.push({
      id: id(),
      name: req.name,
      timestamp: req.timestamp,
      room: req.room,
      color: req.color,
    });
    io.emit("new", waitingList);
  });
});

io.listen(8001, () => {});

server.listen(8000, () => {
  console.log("listening on port :8000");
});
