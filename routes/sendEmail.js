const router = require('express').Router();
let Email = require('../models/sendEmail.model');
const nodeoutlook = require('nodejs-nodemailer-outlook')

//use alternate email to send to my main email
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