const express = require('express'); // khai báo framework
const mongoose = require('mongoose')
const app = express() 
const port = process.env.PORT || 3000; // Trong máy tính có rất nhiều cổng cho các chương trình chạy, thường thì 1-1000 thì các cổng đã được máy tính sử dụng r chú ý đặt cổng lớn hơn 1000
const path= require('path')
const cors = require('cors');

const AccountModel = require('./models/account')


var accountRouter = require('./api_v1/account')
var auth = require('./api_v1/auth')
var todo = require('./api_v1/todo')


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3001'}));




const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost/club_manager_system',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    }catch(error){
        console.log('Lỗi db')
    }
}
connectDB ();


app.get('/fakeAccount',(req,res,next)=>{
    let  username = req.body.username;
    let  password = req.body.password;

   for (let i = 0 ;i < 20;i++){
    AccountModel.create({
        username:username,
        password:password
    })
   }
   res.json('ok')
})
const PAGE_SIZE = 4; // Số lượng tối đa lấy được
app.get('/user',(req,res,next)=>{
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




//Chỉ folder nào được add static mới được công khai
app.use('/public',express.static(path.join(__dirname,'/public'))) // folder này được công khai
// app.get('/',(req,res)=>{
//     // Khi chỉ khi server cho phép trả về thì lập tức client mới xem được,còn ngược lại sẽ được server ẩn giấu đi
//     // Muốn làm được điều đó thì server cần phải public ra đường dẫn trong file ( ví dụ ./style.css)
    
//     let duongDanFile = path.join(__dirname,'home.html');
//     res.sendFile(duongDanFile)
// })
app.use('/',auth)
app.use('/todo/',todo)
app.use('/api/account/',accountRouter)//
































app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
