const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));

const pug = require("pug");
app.set('view engine', 'pug');

// Publish the static files from './static/' folder under '/' path
app.use(express.static('static'));

// Publish the static files from './images/' folder under '/img' path
app.use('/img', express.static('images'));

// Compare res.send() to res.end() in app.js: 
// You don't have to set status code or content type
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use simple Pug template to display web page: http://127.0.0.1:5000/pug
// Notify:
// - use of template arguments: try to change 'false' to 'true' and refresh the web page
// - use of 'res.render()' instead of 'res.send()'
app.get('/pug', (req, res) => {
  res.render('index', { pageTitle: 'Pug template', youAreUsingPug: false});
})

// Passing arguments in request path.
// Try to open http://127.0.0.1:5000/pug/Ann and watch page title
// Replace 'Ann' with your name
app.get('/pug/:user', (req, res) => {
  titleText = `${req.params.user} uses Pug`;
  res.render('index', { pageTitle: titleText, youAreUsingPug: true});
})

// Use Pug template to display list (as a list and as a table)
// Watch how template languages.pug' iterates over the list (each ... in ...)
app.get('/languages', (req, res) => {
  list = ["Java","Python","JavaScript"];
  res.render('languages', {languages: list});
})

// Use the form to send data
// Form is displayed using Pug template: http://127.0.0.1/feedbackform
app.get('/feedbackform', function (req, res) {
    res.render('feedback_form');
  });

// Display the content of the form
// POST request is issued when you click "Submit" button in the form
app.post("/feedbacksummary", function (req, res) {
    username=req.body.name;
    feedback=req.body.feedback;
    res.render('feedback_summary',
        { username: username, feedback: feedback });
  });

// Start the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});