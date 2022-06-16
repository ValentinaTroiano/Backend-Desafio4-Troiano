
const express = require("express");
const router = require("./routes.js");

const app = express();

app.use(express.json()); 
app.use("/api", router); 

app.listen(8080, () => {
  console.log("Server up");
});