const router = require('express').Router();
let Viewer = require('../models/viewCounter.model');
const rateLimit = require("express-rate-limit");


const apiLimiter = rateLimit({
    windowMs: 15 * 60 *  1000, // max of 50 requests per 15 minutes -- I only have like 15 pages so this seems reasonable
    max: 50,   
  });


router.get('/', apiLimiter,(request,response) => {
    
    Viewer.find()
    .then(() => response.json("Views page"))
    .catch(err => response.status(400).json('Could not display total number of viewers: ' + err));

});

    router.post('/',apiLimiter, (request,response) => {
 
    /*let viewerIP = String(request.connection.remoteAddress);*/
    let viewerIP = request.headers['x-forwarded-for'];
    let pageViewed = request.body.pageViewed;

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1; //january is 0
    let day = today.getDate();

    let parsedDate = day + '-' + month + '-' + year;
    let timestamp = parsedDate;

    const newViewer = new Viewer({
        viewerIP,
        pageViewed,
        timestamp,
    });

    newViewer.save()
    .then(() => response.json('New viewer added'))
    .catch(err => response.status(400).json('There was an error saving the new viewer ' + err));

});

module.exports = router;