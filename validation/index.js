
const joi=require('joi')


const createuser=joi.object({
    firstname:joi.string().required(),
    lastname:joi.string().required(),
    email:joi.string().email(),
    marks:joi.number().optional(),
    phonenumber:joi.number()
})
const MarksValidate=joi.object({
    marks:joi.number().required(),
    subject:joi.string().required()
})
const updatebody=joi.object({
    
    marks:joi.number().optional(),
    email:joi.string().email().optional(),
    phonenumber:joi.number().optional()
})

module.exports={
    createuser,
    updatebody,
    MarksValidate
}