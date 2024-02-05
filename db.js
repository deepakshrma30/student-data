const mongoose=require('mongoose')





const UserSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    marks:{
        type:Number
    },
    phonenumber:{
        type:Number,
        required:true
    },
    subject:{
        type:String,

    }
    
})

const MarksSchema=new mongoose.Schema({

    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

    subject:{
        type:String
    },
    marks:{
        type:Number
    }
})


const user= mongoose.model('user',UserSchema)
const marks=mongoose.model('marks',MarksSchema)

module.exports={
    user,
    marks
}