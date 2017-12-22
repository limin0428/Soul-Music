let express = require('express');
let request = require('request');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
let session = require('express-session');
app.listen(9527);   // 后台端口
let listen = 3000;  // 数据端口
// let sliders=require('./mock/sliders');
// let recommendList=require('./mock/recommendList');
// let newSongs=require('./mock/newSongs');
// let searchRes=require('./mock/searchResult');
// let track=require('./mock/track');
// let rankList=require('./mock/rankList');
// let playlist=require('./mock/playlist');
// let songs=require('./mock/songs');


app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'zfpx'
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', "Content-Type");
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == 'OPTIONS') {
        res.end('');
    } else {
        next();
    }
});


let users = [];
// 登录
app.post('/login', function (req, res) {
    let user = req.body;
    let oldUser = users.find(item => item.username == user.username && item.password == user.password);
    if (oldUser) {
        req.session.user = user;
        res.json({code: 0, success: '登陆成功', user: user})
    } else {
        res.json({code: 1, error: '登陆失败'})
    }
});
// 注册
app.post('/reg', function (req, res) {
    let user = req.body;
    let oldUser = users.find(item => item.username == user.username);
    if (oldUser) {
        res.json({code: 1, error: '用户名重复'})
    } else {
        users.push(user);
        res.json({code: 0, success: '用户注册成功'})
    }
});
// 用户退出
app.get('/logout', function (req, res) {
    req.session.user = null;
    res.json({code: 0, success: '退出成功'});
});
// 验证用户是否登录
app.get('/validate', function (req, res) {
    if (req.session.user) {
        res.json({code: 0, user: req.session.user})
    } else {
        res.json({code: 1, error: '此用户未登录'})
    }
});
app.get('/sliders', (req, res) => {
    request(`http://localhost:${listen}/banner`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});
app.get('/playlist', (req, res) => {
    let num = 6; // 获取的歌单数量  parseInt(req.body.num)
    request(`http://localhost:${listen}/top/playlist/highquality?limit=${num}`, function (error, response, data) {
        res.json(JSON.parse(data));
    });
});
// 获取歌单
app.post('/musiclist', (req, res) => {
    let id = parseInt(req.body.id); // 获取的歌单id
    request(`http://localhost:${listen}/playlist/detail?id=${id}`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});
//获取歌曲
app.post('/music', (req, res) => {
    let id = parseInt(req.body.id); // 获取的歌单id
    request(`http://localhost:${listen}/music/url?id=${id}`, function (error, response, data) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(data));
        }
    });
});
//获取歌词
app.post('/lyric', (req, res) => {
    let id = parseInt(req.body.id); // 获取的歌单id
    request(`http://localhost:${listen}/lyric?id=${id}`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});
// 推荐MV
app.get('/mv', (req, res) => {
    request(`http://localhost:${listen}/personalized/mv`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});
app.get('/search',(req,res) => {
    request(`http://localhost:${listen}/search?keywords=${req.query.keywords}`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});
// 歌单详情
app.get('/songmenudetail',(req,res) => {
    request(`http://localhost:${listen}/playlist/detail?id=${req.query.id}`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});
app.get('/personalized', (req, res) => {
    request(`http://localhost:${listen}/personalized/newsong`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});
// 最新MV
app.get('/mvfirst', (req, res) => {
    let num = 10;
    request(`http://localhost:${listen}/mv/first?limit=${num}`, function (error, response, data) {
        res.json(JSON.parse(data));
    });
});
app.get('/mvinfo', (req, res) => {
    request(`http://localhost:${listen}/mv?mvid=${req.query.id}`, function (error, response, data) {
        res.json(JSON.parse(data));
    });
});
app.get('/music',(req,res) => {
    request(`http://localhost:${listen}/music/url?id=${req.query.id}`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});
app.get('/musicsingle',(req,res) => {
    request(`http://localhost:${listen}/artists?id=${req.query.id}`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});






/*
let {type="",offset=0,limit=5} = req.query;
offset = isNaN(offset)?0:parseInt(offset);
limit = isNaN(limit)?0:parseInt(limit);
let newLessons = JSON.parse(JSON.stringify(lessons));
//如果type为空，则不过滤课程类型，如果type不为空，则只出现课程类型跟传入的type相同的课程
newLessons.list = newLessons.list.filter(item=>item.type == type || type =="");
// 0+5  5+5=10 10+5=15 15+5=20
//如果下一页的起始索引已经大于等于总条数了，则认为已经分页完毕，后面已经没有数据了
newLessons.hasMore = limit+offset<newLessons.list.length;//20
//提取指定页的数据
newLessons.list = newLessons.list.slice(offset,offset+limit);//offset0 0-4
for(let i=0;i<newLessons.list.length;i++){
    let lesson = newLessons.list[i];
    lesson.title = `${offset+i+1}-${lesson.title}`;
}
res.json(newLessons);
*/


