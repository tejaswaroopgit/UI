var express = require('express');
var router = express.Router();
var passport = require('passport');

var clients = require('../models/clients');

var clientsFun = function () {

};

clientsFun.prototype.addClient = function (clientInfo, callBack) {   
    var error;
    var retObj = {
        status: false,
        messages: []
    };
    if (clientInfo.body.clientName !== null) {
        console.log("entered the client name if cond...!!")
        retObj.messages.push = "Error Occured please enter the valid name of the client..!!"

        //   callBack(retObj.messages.push = "enter the valid name of the client...!!")

        if (clientInfo.body.clentLocation !== null) {
            console.log("entered the client location if cond...!!")
            //    callBack(retObj.messages.push = "enter the valid location of the client...!!")
        }
        if (clientInfo.body.clentEmail !== null) {
            console.log("entered the client email if cond...!!")
            //    callBack(retObj.messages.push = "enter the valid email of the client...!!")

            if (clientInfo.body.clientAdress !== null) {
                console.log("entered the client address if cond...!!")
                //       callBack(retObj.messages.push = "enter the valid Adress of the client...!!")

                if (clientInfo.body.noOfParts !== null) {
                    console.log("entered the client no of parts if cond...!!")
                    //         callBack(retObj.messages.push = "enter the valid no of parts of the client...!!")

                    if (clientInfo.body.Number !== null) {
                        console.log("entered the client number if cond...!!")
                        //          callBack(retObj.messages.push = "enter the valid name of the client...!!")

                        console.log("entered the final else cond...!!")
                        new clients({
                            clientName: clientInfo.body.clientName,
                            lastname: clientInfo.body.clentLocation,
                            clentEmail: clientInfo.body.clentEmail,
                            clientAdress: clientInfo.body.clientAdress,
                            noOfParts: clientInfo.body.noOfParts,
                            pricePerPart: clientInfo.body.Number,
                            clientJob: clientInfo.body.clientJob,
                            clientStartDate: clientInfo.body.clientStartDate,
                            clientJobExpiry: clientInfo.body.clientJobExpiry,
                            clientComments: clientInfo.body.clientComments

                        }).save(function (err, doc) {
                            console.log("entered the save function condition.....!")

                            if (err) callBack(retObj.messages.push = "Error Occured While saving the member")
                            else callBack(retObj.messages.push = "Successfully added client");
                        })


                    }
                }
            }
        }

    } else {
        callBack(retObj.messages.push="error occured while saving data please check the data..!!")
    }
}


clientsFun.prototype.getClient = function (callBack) {
    var retObj = {
        status: false,
        messages: []
    };

    clients.find(function (err, result) {
        console.log("entered the get client function....!! ")
        console.log(result)
        if (err) callBack(retObj.messages.push = "error occured while fetching data...!!")
        else callBack(result)

    })
}

clientsFun.prototype.getReqClient = function (id, callBack) {

    clients.findById(id,function (result) {
        callBack(result)
    })
}


//clientsFun.prototype.getClients = function (callBack) {
//    clients.find(err, ){
//        if (err) console.log("error occured")
//        else console.log(result)
//    }
//    console.log("entered the  get Clients Api")
//}

    //console.log("entred the Api");
    //console.log(clientInfo);

    //retObj = {
    //    errors:[]    
    //};

    //if (!clientInfo.clientName) {
    //    console.log("entred the if clause first");
    //    retObj.errors.push("Invalid Username");
    //    callback(retObj);
    //}

    //if (!clientInfo.clientEmail) {
    //    retObj.errors.push("Enter the client valid email Adress ");
    //    callback(retObj);

    //}
    //if (!clientInfo.clientJob && !clientInfo.clientStartDate && !clientInfo.clientJobExpiry) {
    //    retObj.errors.push("plesae Enter the Valid Client Details");
    //    callback(retObj);

    //} else {
    //    console.log("entred the else block");
    //  //  var add = new clientsCollection(clientInfo)
    //   var add= new clientsCollection(clientInfo)

    //       add.save(function (err, result) {
    //        if (err) {
    //            retObj.errors.push("Error in saving the object");
    //            callback(retObj);
               
    //        } else {
    //            retObj.errors.push("Clent Added successfully");
    //            retObj.client = result;
    //            callback(retObj);
    //        }

    //    })

    //}



module.exports = new clientsFun();


//clientname: clientInfo.clientname,
//    clentlocation: clientInfo.clientlocation,
//        clentemail: clientInfo.clentemail,
//            clientadress: clientInfo.clientadress,
//                noofparts: clientInfo.noofparts,
//                    priceperpart: clientInfo.priceperpart,
//                        clientjob: clientInfo.clientjob,
//                            clientstartdate: clientInfo.clientstartdate,
//                                clientjobexpiry: clientInfo.clientjobexpiry,
//                                    clientcomments: clientInfo.clientcomments