const express = require('express');

const app = express();
const ExpressError = require('./expressError');

app.get('/', function(req, res){
    res.send('Hello World');
});

// Express Routing Exercises
// For this exercise, you will build an Express.js application that performs three statistical operations given an arbitrary amount of numbers:

// mean (average)
// median (midpoint)
// mode (most frequent)
// The operations are invoked via one route per operation.

// Requirements
// The three base routes are /mean, /median, /mode. All accept GET requests

// Each route takes a query key of nums which is a comma-separated list of numbers. For example, if I want to get the mean of 1, 3, 5, and 7, that would look like be a GET request to /mean?nums=1,3,5,7.

// The response of each operation should be JSON which looks like this:

// response: {
//   operation: "mean",
//   value: 4
// }


//spin up server    nodemon app.js in commandline / terminal
// go to localhost:3000 on browser to see your server and code

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.listen(3000, function () {
  console.log('App on port 3000');
});


