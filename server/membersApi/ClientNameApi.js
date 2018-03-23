var express = require('express');
var router = express.Router();
var passport = require('passport');

var clientsName = require('../models/clientsName');

var clientsNameFun = function () {

};

// Clients Add Function

clientsNameFun.prototype.addClientName = function (clientInfo, callBack) {


    new clientsName({
        clientsName: clientInfo.body.clientsName,
        clentsLocation: clientInfo.body.clentsLocation,
        clentsEmail: clientInfo.body.clentsEmail,
        clientsAdress: clientInfo.body.clientsAdress,
        clientsAddedDate: clientInfo.body.clientsAddedDate,
        clientsComments: clientInfo.body.clientsComments

    }).save(function (err, result) {
        if (err) callBack(console.log("error occured...???"))
        else callBack(result)
    })

}

//Clients Get Function

clientsNameFun.prototype.getClientNames = function (callBack) {

    clientsName.find(function (err, result) {
        if (err) console.log("error occurred..???")
        else callBack(result)
        console.log(result)
       
    })

}

// Find Client By Id
clientsNameFun.prototype.getReqClientNames = function (req, callBack) {
    clientsName.findById({ _id: req.params.id }, function (err, response) {
        console.log(response)
        if (err) console.log("Error Occurred...!!")
        else callBack(response)

    })
}


// update the client name
clientsNameFun.prototype.getReqClientUpdate = function (req, callBack) {
    clientsName.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true }, function (err,response) {
        console.log("entered the api route..!!")
        if (err) console.log("Error Occurred..!!")
        else callBack(response)

    })
}


// delete client
clientsNameFun.prototype.deleteClient = function (req,callBack) {
    clientsName.findByIdAndRemove({ _id: req.params.id }, function (err,result) {
        if (err) console.log("error occurred")
        else callBack(console.log("Delete Successfull"));
    })
}


module.exports = new clientsNameFun();