// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var membersSchema = new Schema({
    name: String,
    lastname: String,
    age: Number,
    email: String,
    education: String
});
membersSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Members', membersSchema);