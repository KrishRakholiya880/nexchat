const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const { application } = require("./config/index.js");

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "NEXCHAT server is running 🚀" });
});

server.listen(application.PORT || 3000, () => {
  console.log(`Server running on port ${application.PORT || 3000}`);
});
