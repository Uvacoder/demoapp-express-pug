const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));

const pug = require("pug");
app.set('view engine', 'pug');

// Share the static files from "./static/" folder
app.use(express.static('static'));

// Share the static files from "/"
app.use('/img', express.static('images'));

// Compare app.js: you don't have to set status code or content type
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use simple Pug template to display web page. Notify use of arguments
// Try to change true to false and refresh the web page
app.get('/index', (req, res) => {
  res.render('index', { title: 'Pug template', youAreUsingPug: true});
})


// Use Pug template to display list (as a list and as a table)
app.get('/languages', (req, res) => {
  list = ["Java","Python","JavaScript"];
  res.render('languages', {languages: list});
})

// Use form to send data
// Form is displayed after GET request
app.get('/feedback', function (req, res) {
    res.render('feedback_form');
  });

// Display the content of the form
// POST request is issued when you click "Submit" button in the form
app.post("/feedback", function (req, res) {
    username=req.body.name;
    feedback=req.body.feedback;
    res.render('feedback_summary',
        { username: username, feedback: feedback });
  });

// Start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});