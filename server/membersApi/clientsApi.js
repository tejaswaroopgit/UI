var express = require('express');
var router = express.Router();
var passport = require('passport');

var clientsCollection = require('../models/clients.js');

var clients = function () {

};

clients.prototype.addClient = function (clientInfo,callback) {
    console.log("entred the Api");

    retObj = {
        errors:[]    
    };

    if (!clientInfo.clientName) {
        retObj.errors.push("Invalid Username");
        callback(retObj);
    }

    if (!clientInfo.clientEmail) {
        retObj.errors.push("Enter the client valid email Adress ");
        callback(retObj);

    }
    if (!clientInfo.clientJob && !clientInfo.clientStartDate && !clientInfo.clientJobExpiry) {
        retObj.errors.push("plesae Enter the Valid Client Details");
        callback(retObj);

    } else {

        var addClients = new clientsCollection(clientInfo)
        addClients.save(function (err,callback) {
            if (err) {
                retObj.errors.push("Error in saving the object");
                callback(retObj);
            } else {
                retObj.errors.push("Clent Added successfully");
                callback(retObj);
            }

        })

    }

}

module.exports = new clients();