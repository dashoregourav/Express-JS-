const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.cookie('name','gourav');
    res.cookie('email','gourav@gmail.com');
    res.status(200).send("Cookie is Set SuccessFully To check cookies -> /get-cookies");
})

router.get('/get-cookies',(req,res)=>{
    res.status(200).send(req.cookies);
})

module.exports=router;