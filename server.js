'use strict';
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/build'));

var dbConnect = process.env.MONGOLAB_URI ||
  'mongodb://localhost/data';
var port = process.env.PORT || 3000;

var heroRoutes = express.Router();

mongoose.connect(dbConnect);

// Require routes function.
require('./routes/heroRoutes')(heroRoutes);
// app.use('path', function)
app.use('/api', heroRoutes);

app.listen(port, function() {
  console.log("Server running on port " + port);
});
