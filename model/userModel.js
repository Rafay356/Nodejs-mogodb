const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name :{
        type : String
    },
    last_name : {
        type : String
    },
    username:{
        type : String,
        require : true

    },
    password : {
        type : String

    },
    email : {
        type : String


    },

    },
{
    freezeTableName : true
})

module.exports = mongoose.model('User',UserSchema)