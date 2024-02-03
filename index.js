const express=require('express')
const  UserRouter =require('./routes/user')
const app=express()

app.use(express.json())

app.use('/api/v1',UserRouter)


app.listen(3000)