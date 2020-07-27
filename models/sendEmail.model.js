const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Email = new Schema ({

    firstName : {
        type: String,
        unique: true,
        trim:true
    },

    lastName : {
        type:String,
        unique:false,
        trim:true
    },
    Employer : {
        type:String,
        unique:true,
        trim: true
    },
    textBody : {
        type:String,
        unique:false,
        trim:true
    }
    

}
)

const sendEmail = mongoose.model('EmailModel', Email);

module.exports = sendEmail;