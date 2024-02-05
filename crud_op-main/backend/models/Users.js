const mongoose = require('mongoose')
 
const UserSchema = new mongoose.Schema({
    Roll:{
        type:Number,
        required:true,
        min:1,

    } ,
    Name: {
        type:String,
        required: true
    },
    
        semester:{ 
            type:Number,
           required :true
        },

    Branch : {
        type:String,
        required: true
    }

})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel