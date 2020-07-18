// dependencies
var express = require("express");

//
var app = express()
var PORT = process.env.PORT || 3000;
require("./route/route.js")(app)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")) // look at public folder

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})