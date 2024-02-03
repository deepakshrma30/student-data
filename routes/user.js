const express=require('express')
const {user} =require('../db')
const app=express()
const zod=require('zod')

const router=express.Router()

router.get('/user',async (req,res)=>{

    const users= await user.find({})

   return res.send({
       users: users.map(user=>({
            username:user.username,
            password:user.password
        }))
    })

})

const createuser=zod.object({
    username:zod.string(),
    password:zod.string()
})

router.post('/post',async (req,res)=>{
    const {success}=createuser.safeParse(req.body)

    if(!success){
        res.status(411).json({
            msg:"wrong inputs"
        })
    }

    await user.create({
        username:req.body.username,
        password:req.body.password

    })
   return res.json({
            msg:"user created"
    })
})

const updatebody=zod.object({
    username:zod.string(),
    password:zod.string()
})

router.put('/update',async(req,res)=>{
    const {success}=updatebody.safeParse(req.body)
    if(!success){
        return res.json({
            msg:"invalid inputs"
        })
    }
    const existinguser=await user.findOne({username:req.body.username})
    if(!existinguser){
        return res.status(401).json({
            msg:"invalid user"
        })
    }
    const filter={username:req.body.username}
    const password={password:req.body.password}

    await user.findOneAndUpdate(filter,password)

    return res.json({
        msg:"updated"
    })

})

router.delete('/delete',async (req,res)=>{
    const username={username:req.body.username}

    await user.deleteOne(username)

   return res.send({
        msg:"delete"
    })

})


module.exports=router