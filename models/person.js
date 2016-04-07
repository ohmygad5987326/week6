var mongoose = require('mongoose');
mongoose.connect('mongodb://week6:week6@ds019470.mlab.com:19470/week6');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  Yoursname: String,
  Birthdaydate: String,
  Phonenumber: String,
  Idnumber: String
});
module.exports = mongoose.model('Person', personSchema);
