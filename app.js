const express = require('express');

const app = express();


app.get('/', function(req, res){
    res.send('Hello World');
});




//spin up server    nodemon app.js in commandline / terminal
// go to localhost:3000 on browser to see your server and code



app.listen(3000, function () {
  console.log('App on port 3000');
});


