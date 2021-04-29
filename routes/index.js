const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    const blogs = [
        { title: "First Blog", snippet: 'This is a First Blog' },
        { title: "Second Blog", snippet: 'This is a Second Blog' },
        { title: "Third Blog", snippet: 'This is a Third Blog' },
        { title: "Fourth Blog", snippet: 'This is a Fourth Blog' }
    ];
    res.render('index', { title: 'Tech Blog | Home', blogs })
})
module.exports=router;