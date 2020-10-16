const express = require('express')
const app = express()
const port = 5000
const {User}=require("./Models/User");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const config = require('./Config/key');
const{ auth } = require('./middleware/auth')


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());
//aplication/cookie 
app.use(cookieParser());


mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('DashBord Start')
})

app.get('/api/hello',(req,res)=>{
    res.send("이3다 대쉬보드 오신것을 환영합니다")
})

app.post('api/user/register',(req, res) => {
    //회원가입에 필요한 정보를 client에서 가져오면
    // DB에 저장
    const user = new User(req.body)
    user.save((err, userInfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            // 200코드 (성공)하면 success : true 를 client에게 전달
            success: true
        })
    })
})

app.post('api/user/login',(req,res)=>{
    //요청한 ID가 존재하는지 확인
    User.findOne({id:req.body.id},(err, user)=>{
        if(!user){
            return res.json({
                loginSuccess:false,
                message:"제공된 계정에 해당하는 유저가 없습니다"
            })
        }
        //비밀번호도확인
        user.comparePassword(req.body.password , (err, isMatch) =>{
            console.log('err',err)
            if(!isMatch)
            return res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다,"})

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                //토큰을 저장한다. user에 토큰이 저장 )-> 쿠키, Local Storage, Session Storage
                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess:true, userId:user._id})
            })
        })
    })
    // token 생성
})

//role nomal:0 admin:1  
//auth 미들웨어
app.get('/api/user/auth',auth,(req,res)=>{
    // 여가까지 미들웨어를 통과해 왔다는것은 Authentication 이 True
    res.status(200).json({
        _id:req.user._id,
        isAdmin:req.user.role === 0 ? false:true,
        isAuth:true,
        id:req.user.id,
        name:req.user.name,
        phone:phone.user.phone,
        email:req.user.email,
        role:req.user.role
    })
})

app.get('/api/user/logout',auth,(req,res)=>{
    User.findOneAndUpdate({_id:req.user._id},
        {token:""}
        ,(err, user)=>{
            if(err)return res.json({success:false,err});
            return res.status(200),send({
                success: true
            })
        })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})