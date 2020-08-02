const router = require('express').Router();
let Email = require('../models/sendEmail.model');
const nodemailer = require("nodemailer");
const nodeoutlook = require('nodejs-nodemailer-outlook')

function nodeOutlookEmail(first, last, emp, textVal){

    nodeoutlook.sendEmail({
        auth: {
            user: "meitzwebsite@outlook.com",
            pass: process.env.PASS_OUTLOOK
        },
        from: 'meitzwebsite@outlook.com',
        to: 'ejmeitz1@gmail.com',
        subject: 'Email From:' + first + ' ' + last, 
        text: 'EMPLOYER: \n'  + emp +  '\n BODY: \n'  + textVal,

        onError: (e) => console.log("ERROR: "+ e),
        onSuccess: (i) => console.log("Email sent successfully" + i)
        }
        
    
    );
   
}

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
router.get('/', (request,response) => {
     response.json("On post page");
});


router.post('/', (request,response) => {
 
    //parse request info
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let employer = request.body.employer;
    let textBody = request.body.textBody;

    //send email
    //checkAndSendEmail (firstName,lastName,employer,textBody);
    nodeOutlookEmail (firstName,lastName,employer,textBody);

    //save form to database incase email fails
    const newPost = new Email({
        firstName,
        lastName,
        employer,
        textBody
    });

    newPost.save()
    .then(() => response.json('Text saved'))
    .catch(err => response.status(400).json('There was an error saving the new post: ' + err));
});

module.exports = router;