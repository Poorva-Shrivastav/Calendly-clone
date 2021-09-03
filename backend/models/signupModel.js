const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupSchema = new Schema({
    // name: String, username: String, email: String, password: String });
    name:{
        type: String,
        required: true 
    },
    username:{
        type: String,
        required: true 
    },
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


module.exports = mongoose.model('signuptable', signupSchema)