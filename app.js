const express = require("express");
const router = require("./routes.js");

const app = express();

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  }
  
  app.use(express.json()); //MW
  app.use(express.urlencoded({ extended: true }));
  
  
  
  app.use("/api", router); //middleware
  app.use("/static", express.static(__dirname + "/public"));
  
  app.use(errorHandler);
  
  app.listen(8080, () => {
    console.log("Server up");
  });