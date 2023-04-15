// bring express package
const express = require("express");

// application
const app = express();

// route , here get means getting the route   [successed]
app.get("/", (req, res) => {
  res.send("Hello Node API");
});

// running the nodeapi on port 3000
app.listen(3000, () => {
  console.log("Node API is running on port 3000");
});
