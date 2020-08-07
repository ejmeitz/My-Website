const router = require('express').Router();
let Viewer = require('../models/viewCounter.model');

router.get('/',(request,response) => {
    
    Viewer.find()
    .then((views) => response.json("Views page"))
    .catch(err => response.status(400).json('Could not display total number of viewers: ' + err));

});

    router.post('/', (request,response) => {
 
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