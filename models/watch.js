const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 3,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref:"member", 
        require: true
    }
}, {timestamps:true})

const watchesSchema = new Schema({
    watchName: {
        type : String, 
        require : true
    },
    image: {
        type: String, 
        require: true
    },
    price : {
        type: Number,
        require: true
    },
    Automatic : {
        type : Boolean,
        default : false
    },
    watchDescription: {
        type: String,
        require: true
    },
    comment : [commentSchema],
    brand : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "brand", 
        require: true},
    },{timestamps: true}
)

const watch = mongoose.model('watch', watchesSchema);
module.exports = watch;