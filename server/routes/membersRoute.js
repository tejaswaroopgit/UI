var express = require('express');
var router = express.Router();
var passport = require('passport');
var mangoose = require('mongoose');

var MembersSchema = require('../models/members.js');

router.post('/addMembers', function (req, res) {

    
    return res.status(200).json({ "key": "member Added Successfully" })    
   
    

});
module.exports = router;



//addMember = function (req, res) {
//    var data = new MembersSchema(req.body);
//    data.save(function (err) {
//        if (err) {
//            return res.status(200).json({ status: "api funcanility not successfull" })

//        } else {

//            return res.status(200).json({ "key": "member Added Successfully" })

//        }



