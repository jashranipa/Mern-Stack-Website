const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name : {
        type:String,
        // required:true
    },
    branch: {
        type:String,
        // required:true
    },
    gender: {
        type:String,
        // required:true
    },
    phone: {
        type:String,
        // required:true
    },
    email: {
        type:String,
        // required:true
    },
    password: {
        type:String,
        // required:true
    }
})

const Register = new mongoose.model("Register",userSchema);

module.exports = Register;