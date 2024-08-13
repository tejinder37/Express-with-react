const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRoutes.js");
const taskRouter = require("./routes/taskRoutes.js");
const connectDb = require("./db/connection");
const PORT = 3000;
const server = express();
connectDb();
server.use(cors());
// parse application/json
server.use(express.json());

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/public", express.static("public")); // express.static for serving static assets.
server.get("/", (req, res) => {
  // res.send("Hello, Welcome to Express js");
  res.sendFile(path.join(__dirname, "pages/index.html"));
});

server.get("/harjeet", (req, res) => {
  let harjeet = {
    name: "Harjeet Singh",
    age: 23,
  };

  res.send(harjeet);
});
server.use(authRouter);
server.use(taskRouter);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
