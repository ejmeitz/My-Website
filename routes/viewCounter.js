const router = require('express').Router();
let Viewer = require('../models/viewCounter.model');

router.get('/',(request,response) => {
    
    Viewer.find()
    .then((views) => response.json("Views:" + views))
    .catch(err => response.status(400).json('Could not display total number of viewers: ' + err));

});

    router.post('/', (request,response) => {
 
    /*let viewerIP = String(request.connection.remoteAddress);*/
    let viewerIP = request.headers['x-forwarded-for'];
    let pageViewed = request.body.pageViewed;
    let timestamp = request.body.timestamp;

    if(viewerIP === null || viewerIP === undefined){
        viewerIP = request.body.viewerIP;
    }
   console.log(viewerIP);
    console.log(pageViewed);
   console.log(timestamp);

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