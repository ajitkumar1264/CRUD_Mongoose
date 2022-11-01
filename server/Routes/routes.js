const { request } = require('express');
const express=require('express')
const route=express.Router();
const users=require('../models/userschema')
const mongoose=require('mongoose');
const userschema = require('../models/userschema');

route.get('/',async(req,res)=>{

    try{
        const data=await users.find({})
        res.status(200).json(data)

    }
    catch(error)
    {
        res.status(404).json({msg:"error in that"})
    }

})

route.post('/',async(req,res)=>{

    const {name,email,age,mobile}=req.body;

    if(!name||!email||!mobile||!age)
    {
        res.status(404).json({msg:'please fill the data'})
    }
    try{

        const preuser=await users.findOne({email:email})

        if(preuser)
        {
            res.status(404).json({msg:"this user already exists"})
        }
        else{
            const adduser=new users({
                name,email,age,mobile
            })

            await adduser.save();
            console.log(adduser)
            res.status(201).json(adduser)
        }


    }catch(error)
    {
        res.status(404).json({msg:"error in submit file"})
    }
})

route.get('/:id',async(req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"error id is not a valid"})   
    }
    
    try{

        const getdec= await users.findById(id)
        res.status(200).json(getdec)

    }catch(error)
    {
             res.status(404).json({msg:"error in that"})
    }


   


})

route.delete('/:id',async(req,res)=>{

    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }


try{

    const deletedoc=await users.findByIdAndDelete({_id:id})
    res.status(200).json(deletedoc);

}catch(error)
{
   res.status(404).json({msg:"error "});
}
    
})

route.patch('/:id',async(req,res)=>{
    
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }

    try{

        const updateworkout= await users.findByIdAndUpdate(id,{
            ...req.body
        })

        if(!updateworkout)
        {
            res.status(404).json({msg:"not updated"})
        }

        res.status(200).json(updateworkout)


    }catch(error)
    {
        res.status(404).json({msg:"error in documents"})

    }
})

module.exports=route;