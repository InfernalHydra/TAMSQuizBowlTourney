const async = require('async');
const parallel = require('async/parallel');
const express = require('express');
const app = express();
const path = require('path')

<<<<<<< HEAD
async.parallel([
  () => {app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname + '/static/Report_standings.html'));
  })},
  () => {app.get('/standings', (req, res) => {
      res.sendFile(path.join(__dirname + '/static/Report_standings.html'));
  })},
  () => {app.get('/games', (req, res) => {
      res.sendFile(path.join(__dirname + '/static/Report_games.html'));
  })},
  () => {app.get('/teamdetail', (req, res) => {
      res.sendFile(path.join(__dirname + '/static/Report_teamdetail.html'));
  })},
  () => {app.get('/playerdetail', (req, res) => {
      res.sendFile(path.join(__dirname + '/static/Report_playerdetail.html'));
  })},
  () => {app.get('/rounds', (req, res) => {
      res.sendFile(path.join(__dirname + '/static/Report_rounds.html'));
  })},
  () => {app.get('/statkey', (req, res) => {
      res.sendFile(path.join(__dirname + '/static/Report_statkey.html'));
  })},
  () => {app.get('/individuals', (req, res) => {
      res.sendFile(path.join(__dirname + '/static/Report_individuals.html'));
  })},

]);
=======
app.use(express.static("js"))
app.use(express.static("pictures"))
app.use(express.static("CSS"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/Report_standings.html'));
});

app.get('/standings', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/Report_standings.html'));
});

app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/Report_games.html'));
});

app.get('/teamdetail', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/Report_teamdetail.html'));
});

app.get('/playerdetail', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/Report_playerdetail.html'));
});

app.get('/rounds', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/Report_rounds.html'));
});

app.get('/statkey', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/Report_statkey.html'));
});

app.get('/individuals', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/Report_individuals.html'));
});
>>>>>>> f-end

app.listen(3000, () => console.log('Example app listening on port 3000!'));
