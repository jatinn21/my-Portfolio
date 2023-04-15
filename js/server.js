// bring express package
const express = require("express");

//bring mongoose package
const mongoose = require("mongoose");

// application
const app = express();

// route , here get means getting the route   [successed]
app.get("/", (req, res) => {
  res.send("Hello Node API");
});

// when you go inside localhost:3000/jatin
// app.get("/jatin", (req, res) => {
//   res.send("Hello Jatin Sharma");
// });

// running the nodeapi on port 3000
// app.listen(3000, () => {
//   console.log("Node API is running on port 3000");
// });

// mongoose
//   .connect(
//     "mongodb+srv://Jatinn21:JaiShreeRam1@cluster0.ia9gnvt.mongodb.net/?retryWrites=true&w=majority"
//   ) //if connected then
//   .then(() => {
//     console.log("Successfully connected with MONGODb");
//   }) // if error occur then
//   .catch((error) => console.log(error));

mongoose
  .connect(
    "mongodb+srv://Jatinn21:mongodb123@jatinnapi.ctxqb61.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected with MongoDb");
    app.listen(3000, () => {
      console.log("Node API is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
