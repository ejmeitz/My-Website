const router = require('express').Router();
let Email = require('../models/sendEmail.model');
const nodeoutlook = require('nodejs-nodemailer-outlook')
const rateLimit = require("express-rate-limit");
 

const apiLimiter = rateLimit({
    windowMs: 45 *  1000, // max of 2 req per 30 seconds
    max: 3,   
  });

//use alternate email to send to my main email
function nodeOutlookEmail(first, last, emp, textVal){

    nodeoutlook.sendEmail({
        auth: {
            user: "meitzwebsite@outlook.com",
            pass: process.env.PASS_OUTLOOK //a random email I dont care about the integrity of
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


router.post('/', apiLimiter, (request,response) => {
 
    //parse request info
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let employer = request.body.employer;
    let textBody = request.body.textBody;

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1; //january is 0
    let day = today.getDate();

    let parsedDate = month + '-' + day + '-' + year;
    let viewerIP = request.headers['x-forwarded-for'];
    //send email
    nodeOutlookEmail (firstName,lastName,employer,textBody);

    //save form to database incase email fails
    const newPost = new Email({
        firstName,
        lastName,
        employer,
        textBody,
        parsedDate,
        viewerIP
    });

    newPost.save()
    .then(() => response.json('Text saved'))
    .catch(err => response.status(400).json('There was an error saving the new post: ' + err));
});

module.exports = router;