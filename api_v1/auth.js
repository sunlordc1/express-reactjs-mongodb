const express = require('express');
var router = express.Router();
const AccountModel = require('../models/account')

router.post('/login',(req,res,next)=>{
    let  username = req.body.username;
    let  password = req.body.password;

    AccountModel.findOne({
        username:username,
        password:password
    })
    .then(data=>{
        if(data){
            res.json({error:false,message:'Đăng nhập thành công'})
        }else{
            res.status(500).json({error:true,message:'Đăng nhập thất bại vui lòng kiểm tra lại thông tin đăng nhập'})
        }

    })
    .catch(err=>{
        res.status(500).json({error:true,message:'Đăng nhập thất bại vui lòng kiểm tra lại thông tin đăng nhập'})
    })
})

router.post('/register',(req,res,next)=>{
    let  username = req.body.username;
    let  password = req.body.password;
    // console.log(req.body)
    AccountModel.findOne({
        username:username
    })
    .then(data=>{
        if(data){
            res.json({error:true,message:'User đã tồn tại'})
        }else{
            return AccountModel.create({
                username:username,
                password:password
            })
        }
    })
    .then(data=>{ //return bởi AccountModel then tại đây
            res.json({error:false,message:'Tạo tài khoản thành công'})
    })
    .catch(err=>{
        res.status(500).json({error:true,message:'Tạo tài khoản thất bại'})
    })
})

module.exports = router ;