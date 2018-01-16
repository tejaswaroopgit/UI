var express = require('express');
var router = express.Router();
var passport = require('passport');
var mangoose = require('mongoose');
var bodyParser = require('body-parser');

var members = require('../models/members');


router.post('/addmembers', function (req, res) {
    console.log("enterd the route ")
    new members({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        email: req.body.email,
        education: req.body.education
    }).save(function (err, doc) {
        if (err) res.json(err)
        else res.send( "successfully added the member");
    })
    
        
});


router.get('/getMembers', function (req, res) {
    members.find(function (err, result) {
        if (err) res.send("error occured")
        else res.send(result);
    })

});

router.get('/getMemberById/:id', function (req, res) {
    members.findOne({ _id: req.params.id },req.body, function (err, result2) {
        if (err) res.send("error occured")
        else res.send(result2)
        console.log(result2)

    });
});


router.put('/updateMember', function (req, res) {
    members.findByIdAndUpdate(req.body._id, req.body, { new: true }, function (err, result1) {
        if (err) res.send("error occured")
        else res.send(result1);

    })
});



router.delete('/deleteMember/:id', function (req, res) {
    members.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) res.send("error occured")
        else res.send("deleted successfully");
    })
});

//router.post('/addMembers', (req, res) => {
//    const data = new MembersSchema(req.body);
//    data.save((err, question) => {
//        if (err) return next(err);
//        res.status(201);
//        res.json(question);
//    });
//});


//router.post('/addMembers', (req, res) => {
//    res.json({
//        response: 'a POST request for CREATING questions',
//        body: req.body
//    });
//});
module.exports = router;



//function (err, memberSchema) {
//    if (err) return res.status(500).send("There was a problem adding the information to the database.");
//    res.status(200).send(memberSchema);
//});

//addMember = function (req, res) {
//    var data = new MembersSchema(req.body);
//    data.save(function (err) {
//        if (err) {
//            return res.status(200).json({ status: "api funcanility not successfull" })

//        } else {

//            return res.status(200).json({ "key": "member Added Successfully" })

//        }




//MembersSchema.create({
//    name: req.body.name,
//    lastname: req.body.lastName,
//    age: req.body.age,
//    email: req.body.email,
//    education: req.body.education

//},



