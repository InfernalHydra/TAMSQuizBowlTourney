const async = require('async');
const parallel = require('async/parallel');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static("js"));
app.use(express.static("pictures"));
app.use(express.static("CSS"));
//for async initializing process
var direct = {}
var url = null
async.series([
  function getCommands(step) {
    fs.readdir("static", (err, files) => {
      if (err) {console.log ("wut")};
      for (let i = 1; i < files.length; i++ ){
          var n = files[i].slice(7).split(".html")[0]
          var m = "/static/" + files[i]
          direct[n] = m;
      };
      step()
    });
  }

], function(err){
    if( err ) {
      console.log('Error: '+err);
}})

app.all('/*', (req, res) => {
  url = req.url.split('/')[1];
  console.log (url);
  if (url in direct) {
    res.sendFile(path.join(__dirname + direct[url]));
  }
  else {
    res.sendFile(path.join(__dirname + '/static/redirect.html'));
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
