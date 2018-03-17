var express = require('express');
var router = express.Router();
var passport = require('passport');
var mangoose = require('mongoose');
var bodyParser = require('body-parser');
var clients = require('../models/clients.js');
var clientsFun = require('../membersApi/clientsApi.js')

router.post('/addClients', function (req, res) {
   
    console.log("entered the route");
    clientsFun.addClient(req, function (result) {        
        res.json(result)
   
       })
  //  res.send("Added Successfully"+res.status);
     
})


// Get route for the clients.....!!
router.get('/getClients', function (req,res) {
    console.log("entered the get clients functions...!!")   
    clientsFun.getClient( function (response) {
        res.send(response);
    })
})


// Find One for the clients for the id

router.get('/getReqClients/:Id', function (req, res) {
    console.log("entered the get req clients route....!!")
    clientsFun.getReqClient(req.params.id, function (result) {
        console.log(result)
        res.json(result);
    })

})


module.exports = router;


//clientsFun.addClient(req.body, function (err, result) {
//    res.send(req.body);
//    res.send("enterd the route");
//    if (err) res.send("error occured")
//    else
//        res.send("Added Successfully")

//})



