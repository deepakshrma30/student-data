const express=require('express')
const mongoose=require('mongoose')
const  UserRouter =require('./routes/user')
const app=express()

app.use(express.json())

app.use('/api/v1',UserRouter)


app.listen(3000,()=>{
    mongoose.connect("mongodb+srv://DeepakSharma:mydatabase@database.te5tgcw.mongodb.net/practice")
})