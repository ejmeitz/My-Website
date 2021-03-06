const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Viewer = new Schema ({

    viewerIP : {
        type: String,
        unique: false,
        trim: true
    },

    pageViewed : {
        type:String,
        unique:false,
        trim:true
    },

    timestamp : {
        type:String,
        unique:false,
        trim: true
    }
    

}
)

const ViewCounter = mongoose.model('View', Viewer);

module.exports = ViewCounter;