var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var clientNames = new Schema({
    clientsName: { unique: true, type: String, index: true },
    clentsLocation: String,
    clentsEmail: String,
    clientsAdress: String,
    clientsAddedDate: String,
    clientsComments: String

})

clientNames.plugin(passportLocalMongoose);

module.exports = mongoose.model('ClientNames', clientNames);