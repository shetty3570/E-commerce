const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
       type :String
    },
    password:{
        type:String
    }
})

const user=mongoose.model('user',userSchema)
module.exports=user
