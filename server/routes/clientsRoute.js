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

router.get('/getReqClients/:id', function (req, res) {
    console.log("entered the get req clients route....!!")
    clientsFun.getReqClient(req, function ( result) {
   
        res.send(result)

       // if (err) console.log("error occured while fetching the data"+   result)
       // else res.json(result)
      
    })
  
})


// Update route
router.put('/updateReqClient/:id', function (req, res) {
    console.log("entered the clients update route..!!")
    clientsFun.updateReqClient(req, function (err, success) {
        if (err) console.log("error occurred..!!")
        else console.log("successfully updated the client..!!")

    })
})


//Delete Route...!!
router.delete('/deleteReqClient/:id', function (req,res) {
   console.log("entered the delete route..!!")
    clientsFun.deleteReqClient(req, function ( response) {
     
       res.send("deleted successfully..!!")
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



