const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.listen("4000", () => {
    console.log("Server is running on port 4000");
});
