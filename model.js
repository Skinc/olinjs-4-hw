var mongoose = require('mongoose')

var userschema = mongoose.Schema({ name: String});
var user = mongoose.model('User', userschema);

var twitschema = mongoose.Schema({
  user: String,
  twit:String
});
twit = mongoose.model('twit', twitschema)
exports.user = user
exports.twit = twit
