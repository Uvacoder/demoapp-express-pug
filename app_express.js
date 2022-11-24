const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));

const pug = require("pug");
app.set('view engine', 'pug');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.send('Hello Worlds!');
});

app.get('/languages', (req, res) => {
  list = ["Java","Python","JavaScript"];
  res.render('languages', {languages: list});
})

// Handling get request
app.get('/feedback', function (req, res) {
    res.render('feedback_form');
  });

app.post("/feedback", function (req, res) {
    username=req.body.name;
    feedback=req.body.feedback;
    res.render('feedback_summary',
        { username: username, feedback: feedback });
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});