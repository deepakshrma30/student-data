const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://DeepakSharma:mydatabase@database.te5tgcw.mongodb.net/practice")



const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user= mongoose.model('user',UserSchema)


module.exports={
    user
}