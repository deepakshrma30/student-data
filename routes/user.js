const express=require('express')
const {user,marks} =require('../db')

const app=express()



const { createuser, updatebody, MarksValidate } = require('../validation/index')

const router=express.Router()

router.get('/user',async (req,res)=>{

    const users= await user.find({})

   return res.send({
      users
    })

})



router.post('/post',async (req,res)=>{

    try{
        const value=await createuser.validateAsync(req.body)

    


        await user.create({
         firstname:req.body.firstname,
         lastname:req.body.lastname,
         email:req.body.email,
        
         phonenumber:req.body.phonenumber
    
        })
       return res.json({
                msg:"user created",
                // token:token
        })
    }catch(error){
        return res.status(400).send(error.message)
    }
   
})



router.put('/update', async (req, res) => {
  try {
    const data = await updatebody.validateAsync(req.body);

    const id = req.query.id;
    const existingUser = await user.findOne({ _id: id });

    if (!existingUser) {
      return res.status( ).json({
        msg: 'User does not exist',
      });
    }

    const filter = { _id: id };
    const updatedBody = {
      
      phonenumber: req.body.phonenumber,
      email: req.body.email,
    };

    await user.findOneAndUpdate(filter, updatedBody);

    return res.json({
      msg: 'Updated',
    });
  } catch (error) {
    

      return res.status(400).send(error.message)
       
    
    
  
}
});

router.post('/updateMarks', async (req, res) => {
  try {
    const data = await MarksValidate.validateAsync(req.body);

    const id = req.query.id;
    const existingUser = await user.findOne({ _id: id });

    if (!existingUser) {
      return res.status(404).json({
        msg: 'User does not exist',
      });
    }

    // const filter = { _id: id };
    // const updatedBody = {
    //   marks: req.body.marks,
    //   subject:req.body.subject,
    // //   phonenumber: req.body.phonenumber,
    // //   email: req.body.email,
    // };
    let dataa = await marks.create({
       id: req.query.id,
        subject:req.body.subject,
        marks:req.body.marks

    })
console.log(dataa)
    // await user.findOneAndUpdate(filter, updatedBody);

    return res.status(200).json({
      msg: 'marks updated',
    });
  } catch (error) {
    

      return res.status(400).send(error.message)
       
    
    
  
}
});







 

router.delete('/delete',async (req,res)=>{
    const id={_id:req.query.id}

    const existingUser = await user.findOne({ _id: id });

    if (!existingUser) {
      return res.status( ).json({
        msg: 'User does not exist',
      });
    }

    await user.deleteOne(id)

   return res.send({
        msg:"delete"
    })

})


module.exports=router