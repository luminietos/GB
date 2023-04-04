const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require('path');
const port = 5000;

// FOR EJS
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.static("public"));


// THE LANDING PAGE
app.get("/", function (_req, res) {
  // redirecting page to index html file
  res.sendFile(path.join(__dirname + '/index.html'));
});

// THE GUESTBOOK TABLE PAGE
app.get("/guestbook", (_req, res) => {
  fs.readFile("jsondata.json", (err, data) => {
    if (err) {
      res.status(500).send("Error loading data");
      return;
    }

    const jsonData = JSON.parse(data);

    var tableData = {
      data: jsonData,
  };
    res.render("./pages/index",tableData);
    //res.send(results);
  });
});

// THE NEW ENTRY aka NEW MESSAGE PAGE
app.get("/newmessage", function (_req, res) {
  res.sendFile(__dirname + "/newmessage.html");
});

// handles the post request
app.post("/newmessage", function (req, res) {
  const formData = req.body;

  // adding the current date to formData & formatting it
  const options = { 
    weekday:"long", 
    year:"numeric", 
    month:"long", 
    hour:"numeric", 
    minute:"numeric" };
  formData.date = new Date().toLocaleDateString('en-us', options);
  
  fs.readFile("jsondata.json", function (err, data) {
    if (err) throw err;
    
    const entries = JSON.parse(data);
    entries.push(formData);
    
    // writing form data to file
    fs.writeFile("jsondata.json", JSON.stringify(entries), function (err) {
      if (err) throw err;
      console.log("New entry added to data.json");
      
      //after the user's sent their message...
      res.redirect("/guestbook");
    });
  });
});


// THE AJAX MESSAGE PAGE 
app.get("/ajaxmessage", function (_req, res) {
  res.sendFile(__dirname + "/ajaxmessage.html");
});

// THE ERROR FUNCTION
app.get("*", function (_req, res) {
  res.status(404).send("Can't find requested page");
});

// PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
