const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);

// Enable CORS
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001", // Change this to your React app's URL
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// Serve static files (optional, if you want to serve React from here)
// app.use(express.static('build'));

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("New client connected");

  // Listen for messages from the client
  socket.on("message", (msg) => {
    console.log("Message received: ", msg); // Debug log
    // Echo the message back to the client
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
