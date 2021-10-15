const express = require('express');
var router = express.Router();
require('dotenv').config();
const AccountModel = require('../models/account');
const TodoModel = require('../models/todo');

const PAGE_SIZE = 4; // Số lượng tối đa lấy được
router.get('/fakeAccount',(req,res,next)=>{
    let  username = 'userclone';
    let  password = 'userclone';

   for (let i = 0 ;i < 20;i++){
    AccountModel.create({
        username:username+i,
        password:password,
    })
   }
   res.json('ok')
})
router.get('/fakeTodo',(req,res,next)=>{

   for (let i = 0 ;i < 20;i++){
    TodoModel.create({
        title:'Việc cần làm'+ ' ' + i,
        completed:false
    })
   }
   res.json('ok')
})

router.get('/user',(req,res,next)=>{
    let page = req.query.page;
    if(page){
        //get page
        page = parseInt(page);
        page<1?page = 1:page=page
     
        let skip = (page - 1)*PAGE_SIZE  // số lượng bỏ qua
        AccountModel.find({})
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
        AccountModel.find({})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({error:true,message:'Tạo tài khoản thất bại'})
        })
    }
   
})
module.exports = router ;