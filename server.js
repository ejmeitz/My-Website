const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json());



const uri = process.env.ATLAS_URI;

mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI|| uri || 'mongodb://localhost/MyWebsite', {
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


const viewsRouter = require('./routes/viewCounter.js');

app.use('/views', viewsRouter);


if(process.env.NODE_ENV === 'production'){
  
            app.use(express.static("front_end/build"));
            app.use('*', express.static('front_end/build'));
            app.get("*", (req, res) => {
              res.sendFile(path.resolve((__dirname, "front_end", "build", "index.html")));
            });

    }

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});


let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ejmeitz1@gmail.com',
    pass: process.env.PASS
  }
});

let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});