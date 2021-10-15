//Import
require('dotenv').config();
const express = require('express'); // khai báo framework
const mongoose = require('mongoose')
const app = express() 
const port = process.env.AUTH_PORT || 5000; // Trong máy tính có rất nhiều cổng cho các chương trình chạy, thường thì 1-1000 thì các cổng đã được máy tính sử dụng r chú ý đặt cổng lớn hơn 1000
const path= require('path')
const cors = require('cors');
const jwt = require('jsonwebtoken')
const verifyToken = require('./middleware/auth')





app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3001'}));
const AccountModel = require('./models/account')



//Connect DB
const connectDB = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pyzeq.mongodb.net/database?retryWrites=true&w=majority`,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }) 
        console.log("ok db")
    }catch(error){
        console.log(error)
    }
}
connectDB ();

const generationTokens = payload=>{
    const {_id,username} = payload
    const accessToken =  jwt.sign( {_id,username},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15s'})
    const refreshToken = jwt.sign( {_id,username},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1h'})
    return {accessToken,refreshToken}
}

const updateRefreshToken = async (_id,refreshToken)=>{
    const refresh = await AccountModel.findByIdAndUpdate(_id,{
        refreshToken
    })
    // console.log(_id,refreshToken)
}
//Routing global
app.post('/login',(req,res,next)=>{
    let  username = req.body.username;
    let  password = req.body.password;

    AccountModel.findOne({
        username:username,
        password:password
    })
    .then(data=>{
        if(data){
            //Create JWT 
            let payload =  {
                username:data.username,
                _id:data._id
            }

            const tokens = generationTokens(payload)
            console.log(tokens)
            updateRefreshToken(data._id,tokens.refreshToken)
            res.json({error:false,message:'Đăng nhập thành công',data:tokens})
        }else{
            res.status(401).json({error:true,message:'Đăng nhập thất bại vui lòng kiểm tra lại thông tin đăng nhập'})
        }

    })
    .catch(err=>{
        res.status(500).json({error:true,message:'Đăng nhập thất bại vui lòng kiểm tra lại thông tin đăng nhập'})
    })
})

app.post('/token',async (req,res)=>{
   
    const refreshToken = req.body.refreshToken;
    // console.log(refreshToken)
    if(!refreshToken) return res.sendStatus(401)
    const rs = await AccountModel.find({ refreshToken});
    // console.log(rs)
  

})








app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
