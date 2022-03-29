const express = require("express")
const userM = require('../model/userModel')
const router = express.Router()


router.get('/get',async(req,res)=>{
    try{
        const user = await userM.find()
        res.send(user)
        

    }catch(err){
        res.send("Error"+err)
    }
    
})

router.get('/get/:id',async(req,res)=>{
    try{
        const user = await userM.findById(req.params.id)
        res.send(user)
        

    }catch(err){
        res.send("Error"+err)
    }
    
})

router.post('/user',async(req,res)=>{
    const user = new userM({
        username : req.body.username,
        first_name :  req.body.first_name,
        last_name: req.body.last_name,
        email : req.body.email,
        password : req.body.password,
    })
    try{
        const u1 = await user.save()
        res.json(u1)
        }
    catch(err){
        console.log('Er'+err)

    }
})

module.exports = router