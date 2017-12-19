let express = require('express');
let app = express();
let users=[];//这里存放着所有的用户信息
let bodyParder=require('body-parser');
let session=require('express-session');
app.use(session({
    resave:true,
    secret:'zfpx',
    saveUninitialized:true
}));
app.use(bodyParder.json());//客户端发过来的请求体是JSON格式
app.use(function(req,res,next){
    //如果在webpack里配置了代理，那么这些响应头都不要了
    //只允许8080访问
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    //服务允许客户端发的方法
    res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
    //服务器允许的请求头
    res.header('Access-Control-Allow-Headers','Content-Type,Accept');
    //允许客户端把cookie发过来
    res.header('Access-Control-Allow-Credentials','true');
    //如果请求的方法是OPTIONS,那么意味着客户端只要响应头，直接结束响应即可
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});

app.post('/api/reg',function (req,res) {
    let user=req.body;//取得请求体
    let oldUser= users.find(item=>item.username==user.username);
    if(oldUser){
        res.json({code:1,error:'用户名重复'})
    }else {
        users.push(user);
        res.json({code:0,success:'注册成功'});
    }
});
app.post('/api/login',function (req,res) {
    let user=req.body;
    let oldUser=users.find(item=>item.username==user.username&&item.password==user.password);
    if(oldUser){
        req.session.user=oldUser;
        res.json({code:0,success:'登录成功',user});
    }else {
        res.json({code:1,error:'用户名或密码错误'})
    }
});
app.get('/api/logout',function (req,res) {
    req.session.user=null;
    res.json({code:0,success:'退出成功'})
});
//验证用户是否登录
app.get('/api/validate',function (req,res) {
    if(req.session.user){
        res.json({code:0,user:req.session.user})
    }else {
        res.json({code:1,error:'此用户未登录'})
    }
})
app.listen(3000);