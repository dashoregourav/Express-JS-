const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('user', { title: 'Tech Blog | User' });
})
router.post('/',(req,res)=>{
    res.end(`User Created : Name = ${req.body.uname}`)
})
module.exports=router;