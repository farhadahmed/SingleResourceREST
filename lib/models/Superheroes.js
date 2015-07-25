var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var superheroSchema = new Schema({
  name: {type: String, required: 'name required'},
  alterEgo: String,
  sex: String
});

module.exports = mongoose.model('Superhero', superheroSchema);
