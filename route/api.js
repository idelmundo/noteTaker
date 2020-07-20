var fs = require("fs")
var path = require("path")
    // var db = require("../db/db.json");


//route that sends the user
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    })

    app.post("/api/notes", function(req, res) {
        var newNote = req.body; // holds parameter
        var inputs = fs.readFileSync("./db/db.json");
        newNote.id = String(inputs.length); // creates new id
        inputs = JSON.parse(inputs);
        inputs.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(inputs));
        res.json(inputs);
    })

    app.delete("/api/notes/:id", function(req, res) {
        var noteID = req.params.id
        userInputs = fs.readFileSync("./db/db.json");
        userInputs = JSON.parse(userInputs);
        userInputs = userInputs.filter(function(note) {
            if (noteID === note.id) {
                return false;
            } else {
                return true;
            }
        })

        fs.writeFileSync("./db/db.json", JSON.stringify(userInputs));
        res.json(userInputs);
    });
};