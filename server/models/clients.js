var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Clients = new Schema({
    clientName: { unique: true, type: String, index: true },
    clentLocation: String,
    clentEmail: String,
    clientAdress: String,
    clientJob: String,
    noOfParts: Number,
    pricePerPart: Number,
    clientStartDate: Date,
    clientJobExpiry: Date,
    clientComments: String
    
})

Clients.plugin(passportLocalMongoose);

module.exports = mongoose.model('clients', Clients);

