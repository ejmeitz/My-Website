const router = require('express').Router();
let Viewer = require('../models/viewCounter.model');

router.get('/',(request,response) => {
    
    Viewer.find()
    .then((views) => response.json(views))
    .catch(err => response.status(400).json('Could not display total number of viewers: ' + err));

});

    router.post('/add', (request,response) => {
 
    /*let viewerIP = String(request.connection.remoteAddress);*/
    let viewerIP = request.headers['x-forwarded-for'];
    let page = request.body.pageViewed;
    let timestamp = Number(request.body.timestamp);

    console.log(viewerIP);
    console.log(page);
    console.log(timestamp);

    const newViewer = new Viewer({
        viewerIP,
        page,
        timestamp,
    });

    newViewer.save()
    .then(() => response.json('New viewer added'))
    .catch(err => response.status(400).json('There was an error saving the new viewer ' + err));

});

module.exports = router;