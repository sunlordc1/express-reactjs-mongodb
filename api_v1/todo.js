const express = require('express');
var router = express.Router();
const TodoModel = require('../models/todo')
router.get('/',(req,res,next)=>{
    let page = req.query.page;
    if(page){
        //get page
        page = parseInt(page);
        page<1?page = 1:page=page
     
        let skip = (page - 1)*PAGE_SIZE  // số lượng bỏ qua
        TodoModel.find({})
        .skip(skip)
        .limit(PAGE_SIZE) 
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({error:true,message:'Cos loi'})

        })
    }else{
        //get all
        TodoModel.find({})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({error:true,message:'Tạo tài khoản thất bại'})
        })
    }
   
})
module.exports = router ;