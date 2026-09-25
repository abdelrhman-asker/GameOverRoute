const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

// Serve static files (optional, if you want to serve React from here)
// app.use(express.static('build'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
