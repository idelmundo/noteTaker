
   
  <p>
  <img src="https://media.giphy.com/media/Wn5qWwmGfHUMOIUpSN/giphy.gif"width="450"/></p>
  <hr>
  
  ## Table Of Contents
  |   |       | |
| ------------- |:-------------:| -----:|
| [E-mail](#email)| [Project Title](#Project-title)| [Description](#description)|
| [Installation](#installation)| [Usage](#usage)| [License](#license)|
| [Contribute](#contribute)| [Tests](#tests)| [Questions](#questions)|
  <hr>

  ## Email 
  idelmundo@gmail.com
  <hr>
      
  ## Project title 
  noteTaker
  <hr>

  ## Description 
  In this project we had to work as a backend developer because we were given the front end side of it. So we had to make API/routes and server as well. Which is pretty cool how things are link together one of the challenging things were routing it and being able to write/save and delete since we had to make new id for each note that was input from the user. Here's an example of the code "app.post("/api/notes", function(req, res) {
        var newNote = req.body; // holds parameter
        var inputs = fs.readFileSync("./db/db.json");
        newNote.id = String(inputs.length); // creates new id
        inputs = JSON.parse(inputs);
        inputs.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(inputs));
        res.json(inputs);"  
  <hr>

  ## Installation 
  npm i, and express
  <hr>

  ## Usage 
  N/A
  <hr>

  ## License 
  MIT
  <hr>

  ## Contribute
  Github, heroku and my readMe generator 
  <hr>

  ## Tests 
  js
  <hr>

  ## Questions 
  
  <hr>

  ![license](https://img.shields.io/badge/license-MIT-orange.svg)
        