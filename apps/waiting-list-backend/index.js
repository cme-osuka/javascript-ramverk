const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);

const { Server } = socketio;
const io = new Server(server);

const messages = [];
const recentMessages = messages.slice(Math.max(messages.length - 20, 0));

app.get("/", (req, res) => {
  res.sendStatus(200)
})

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chatmsg", (msg) => {
    if (typeof msg === "string") {
      console.log("message: ", msg);
      messages.push(msg);
      io.emit("newmsg", recentMessages);
    }
  });
});

server.listen(8000, () => {
  console.log("listening on port :8000");
});
