const router = require('express').Router();
let Email = require('../models/sendEmail.model');
const nodemailer = require("nodemailer");


function checkAndSendEmail (first, last, emp, textVal) {
    console.log("Inside email func");
    if(textVal === ""){
        console.log("No text in body. Will not send email");
        return;
    }

    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.USER, 
        pass: process.env.PASS
        }
    });

    
    let mailDetails = { 
        from: 'ejmeitz1@gmail.com', 
        to: 'ejmeitz@wustl.edu',
        subject: 'Email From:' + first + ' ' + last, 
        text: 'EMPLOYER: \n'  + emp +  '\n BODY: \n'  + textVal,
    }; 

    
    transporter.sendMail(mailDetails, (err, info) => { 
        
        if(err) { 
            console.log('Error Occurs' + err); 
        } else { 
            console.log('Email sent successfully' + info.response); 
        } 
    });
}


router.post('/', (request,response) => {
 
    //parse request info
    let firstName = request.body.first;
    let lastName = request.body.last;
    let employer = request.body.emp
    let textBody = request.body.textBody;

    //send email
    checkAndSendEmail (firstName,lastName,employer,textBody);

});

module.exports = router;