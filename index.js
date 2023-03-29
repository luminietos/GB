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

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));  //better and newer way than first answer


// THE LANDING PAGE
app.get("/", function (_req, res) {
  // redirecting page to index html file
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// THE GUESTBOOK PAGE
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
  res.sendFile(__dirname + "/public/newmessage.html");
});

// handles the post request
app.post("/newmessage", function (req, res) {
  const formData = req.body;
  fs.readFile("jsondata.json", function (err, data) {
    
    if (err) throw err;

    const entries = JSON.parse(data);
    entries.push(formData);
    
    // writing form data to file
    fs.writeFile("jsondata.json", JSON.stringify(entries), function (err) {
      if (err) throw err;
      console.log("New entry added to data.json");
      res.redirect("/public/guestbook");
    });
  });
});



// SENDING DATA TO JSON FILE
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.post("/submit", function(req, res) {
//   var data = req.body;

//   fs.readFile("jsondata.json", function(err, fileData) {
//       if (err) {
//           console.error(err);
//           res.status(500).send("Error reading data file.");
//           return;
//       }

//       var jsonData = JSON.parse(fileData);
      
//       jsonData.push(data);

//       fs.writeFile("jsondata.json", JSON.stringify(jsonData), function(err) {
//           if (err) {
//               console.error(err);
//               res.status(500).send("Error");
//               return;
//           }
//           res.send("Data successfully written to file.");
//       });
//   });
// });

// AJAX 
app.get("/ajaxmessage", function (_req, res) {
  res.send("AJAX ROUTE");
});

// THE ERROR FUNCTION
app.get("*", function (_req, res) {
  res.status(404).send("Can't find requested page");
});

// PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
