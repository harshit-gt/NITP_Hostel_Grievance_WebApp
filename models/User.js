const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type: String,
        required: true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})

const users = new mongoose.model("users",UserSchema);

module.exports = users;