var fs = require("fs")
var path = require("path")
var db = require("../db.json")
var dbData = []



//route that sends the user
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html")); //sending user can go back to application and wont give 404 
    });

    app.get("/api/notes", function(req, res) {
        return res.json(db)
    });

    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        if (db === '') {
            newNote.id = 1
        } else {
            newNote.id = db.length
        }
        dbData.push(newNote)
        fs.writeFileSync("../db.json", JSON.stringify(db), function(err) {
            if (err) {
                throw err
            }
            console.log(dbData)
            res.json(dbData)
        })
    });
    // delete notes
    app.delete("/api/notes/:id", function(req, res) {
        var deleteNote = req.params.id;
        var arr = [];
        // write db.json
        if (!db === undefined || !db.length === 0) {
            for (let i = 0; i < notes.length; i++) {
                db[i].id = i
                arr.push(dbData[i]);
            }
        }
        dbData = arr
        fs.writeFileSync(db, JSON.stringify(arr), function(err) {
            if (err) {
                throw err
            }
            console.log(db)
            res.json(db)
        });
    })
}

//write file to db and push to notes