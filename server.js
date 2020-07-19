// dependencies
const express = require("express");
const path = require("path");
const { response } = require("express");
const app = express()

// Config
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.static(path.join(__dirname, "public"))) // look at public folder

require("./route/api.js")(app)
require("./route/route.js")(app)


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})