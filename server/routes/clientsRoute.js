var express = require('express');
var router = express.Router();
var passport = require('passport');
var mangoose = require('mongoose');
var bodyParser = require('body-parser');
var clients = require('../models/clients.js');
var clientsApi = require('../membersApi/clientsApi.js')

router.post('/addClients', function (req, res) {
    res.send("enterd the route");

    clientsApi.addClient(req.body, function (err, result) {
        res.send(req.body);
        res.send("enterd the route");
        if (err) {
            res.send("error Occured");
        } else {
            res.send("Added Successfully");
        };
    })

})

module.exports = router;


