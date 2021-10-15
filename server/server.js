//Import
require('dotenv').config();
const express = require('express'); // khai báo framework
const mongoose = require('mongoose')
const app = express() 
const port = process.env.PORT || 3000; // Trong máy tính có rất nhiều cổng cho các chương trình chạy, thường thì 1-1000 thì các cổng đã được máy tính sử dụng r chú ý đặt cổng lớn hơn 1000
const path= require('path')
const cors = require('cors');
const jwt = require('jsonwebtoken')
// const verifyToken = require('./middleware/auth')
//Model



//Use

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3001'}));



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



//Routing
app.post('/register',(req,res,next)=>{
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

//Router
var accountRouter = require('./api_v1/account')
app.use('/api/account/',accountRouter)//

var test = require('./api_v1/test')
app.use('/',test)

var todo = require('./api_v1/todo')
// app.use('/todo/',verifyToken,todo)
app.use('/todo/',todo)


//Chỉ folder nào được add static mới được công khai
// app.use('/public',express.static(path.join(__dirname,'/public'))) // folder này được công khai
// app.get('/',(req,res)=>{
//     // Khi chỉ khi server cho phép trả về thì lập tức client mới xem được,còn ngược lại sẽ được server ẩn giấu đi
//     // Muốn làm được điều đó thì server cần phải public ra đường dẫn trong file ( ví dụ ./style.css)
    
//     let duongDanFile = path.join(__dirname,'home.html');
//     res.sendFile(duongDanFile)
// })

































app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
