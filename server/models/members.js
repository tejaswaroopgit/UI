// mems model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var Members = new Schema({
    name: { unique: true, type: String ,index: true},
    lastname: String,
    age: Number,
    email: String,
    education: String
});
Members.plugin(passportLocalMongoose);

module.exports = mongoose.model('members', Members);