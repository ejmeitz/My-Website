const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const currentPORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json());

let URI;
if(process.env.NODE_ENV === 'production'){
    URI = process.env.PRODUCTION_ATLAS_URI2;
} else {
    URI = process.env.ATLAS_URI2
}

mongoose.connect( URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
         useCreateIndex: true})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("mongoDB connection established successflly")
});

mongoose.connection.on('connected',()=> {
    console.log('Mongoose is connected')
})

//create back end routes
const viewsRouter = require('./routes/viewCounter.js');
const sendEmailRouter = require('./routes/sendEmail.js');

app.use('/views', viewsRouter);
app.use('/sendEmail', sendEmailRouter);

//serve static files
if(process.env.NODE_ENV === 'production'){
            app.use(express.static("front_end/build"));
            app.use('*', express.static('front_end/build'));
            app.get("*", (req, res) => {
              res.sendFile(path.resolve((__dirname, "front_end", "build", "index.html")));
            });
}


app.listen(currentPORT, () => {
    console.log(`Server is running on port: ${currentPORT}`)
});


