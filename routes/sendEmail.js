const router = require('express').Router();
let Email = require('../models/sendEmail.model');
const nodemailer = require("nodemailer");


function checkAndSendEmail (first, last, emp, textVal) {
    if(textVal === ""){
        console.log("No text in body. Will not send email");
        return;
    }

    let transporterOutlook = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false, 
        port: 587, 
        tls: {
        ciphers:'SSLv3'
        },
        auth: {
            user: 'meitzwebsite@outlook.com',
            pass: process.env.PASS_OUTLOOK
        },
            debug: false,
            logger: true 
    });

    let transporterGMAIL = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
        user: process.env.USER_GMAIL, 
        pass: process.env.PASS_GMAIL
        },
        debug: false,
        logger: true 
    })
    
    let mailDetailsOutlook = { 
        from: 'meitzwebsite@outlook.com', 
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

    
    transporterOutlook.sendMail(mailDetailsOutlook, (err, info) => { 
        
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