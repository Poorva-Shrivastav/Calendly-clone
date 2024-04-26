const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signinSchema = new Schema({
    email:{
        type: String,
        required: true 
    },
    password:{
        type: String,
        required: true 
    }, 
    // available for backend only
    date:{
       type: Date,
       default: Date.now 
    }
})


module.exports = mongoose.model('signintable', signinSchema)