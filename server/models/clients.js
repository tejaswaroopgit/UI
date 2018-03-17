var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Clients = new Schema({
    clientName: { unique: true, type: String, index: true },
    clentLocation: String,
    clentEmail: String,
    clientAdress: Number,
    noOfParts: Number,
    pricePerPart: Number,
    clientJob: String,
    clientStartDate: String,
    clientJobExpiry: String,
    clientComments: String
    
})

Clients.plugin(passportLocalMongoose);

module.exports = mongoose.model('clients', Clients);

