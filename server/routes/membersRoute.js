var express = require('express');
var router = express.Router();
var passport = require('passport');
var mangoose = require('mongoose');

var Members = require('../models/members.js');

router.post('/addMembers', function (req, res) {


    return res.status(200).json({ status: "api funcanility successfull" })

    

});
module.exports = router;



//if (req) {
//    var myData = new members(req.body);
//    myData.save();
//    return res.status(200).json({ status: "api funcanility successfull" })
//}