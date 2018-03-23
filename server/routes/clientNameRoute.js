var express = require('express');
var router = express.Router();
var passport = require('passport');
var mangoose = require('mongoose');
var bodyParser = require('body-parser');

var clientsName = require('../models/clientsName');

var clientsNameFun = require('../membersApi/ClientNameApi')

router.post('/addClientName', function (req, res) {
    console.log(req.body)
  console.log("entered the route")
  clientsNameFun.addClientName(req, function (result) {
        res.send(result)
    })
})

router.get('/getClientName', function (req, res) {
    console.log("entered the route..!!")
    clientsNameFun.getClientNames( function (result) {
        res.send(result)
    })


})

router.get('/getReqClients/:id', function (req, res) {
    console.log("entered route")
    clientsNameFun.getReqClientNames(req, function (response) {
        res.send(response);
    })
})

router.put('/updateClientsName/:id', function (req, res) {
    console.log("entered the Clients Name Route "+req.body)
    clientsNameFun.getReqClientUpdate(req, function (err, result) {
        res.send(result)
    })
})

router.delete('/deleteClient/:id', function (req, res) {
    console.log("delete client route entered..!!")
    clientsNameFun.deleteClient(req,function (result) {
        res.send("deleted successfully");
    })

})

module.exports=router