const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    const queryParameter = req.query; //gourav
    console.log(queryParameter.name); //gourav
    res.render('create', { title: 'Tech Blog | Create new Blog', name: queryParameter.name });
})

module.exports=router;