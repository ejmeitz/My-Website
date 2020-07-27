const router = require('express').Router();
let Email = require('../models/sendEmail.model');
const nodemailer = require("nodemailer");


function checkAndSendEmail (first, last, emp, textVal) {
    console.log("Inside email func");
    if(textVal === ""){
        console.log("No text in body. Will not send email");
        return;
    }

    
    let transporterYahoo = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        service: 'yahoo',
        secure: 'false',
        auth: {
        user: process.env.USER_YAHOO, 
        pass: process.env.PASS_YAHOO
        },
        debug: false,
        logger: true 
    });

    let transporterGMAIL = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
        user: process.env.USER_GMAIL, 
        pass: process.env.PASS_GMAIL
        },
        debug: false,
        logger: true 
    })
    
    let mailDetailsYahoo = { 
        from: 'ejmeitz@yahoo.com', 
        to: 'ejmeitz1@gmail.com',
        subject: 'Email From:' + first + ' ' + last, 
        text: 'EMPLOYER: \n'  + emp +  '\n BODY: \n'  + textVal,
    }; 

    let mailDetailsGmail = { 
        from: 'ejmeitz1@gmail.com', 
        to: 'ejmeitz1@gmail.com',
        subject: 'Email From:' + first + ' ' + last, 
        text: 'EMPLOYER: \n'  + emp +  '\n BODY: \n'  + textVal,
    }; 

    
    transporterGMAIL.sendMail(mailDetailsGmail, (err, info) => { 
        
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