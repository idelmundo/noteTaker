var fs = require("fs")
var path = require("path")

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));

    })

    app.get("*", function(req, res) {
        console.log(' WHo are you hoodini', req.path);
        res.sendFile(path.join(__dirname, "../public/index.html")); //sending user can go back to application and wont give 404
    })
}