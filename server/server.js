let express = require('express');
let request = require('request');

let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
let session = require('express-session');
app.listen(9527);   // 后台端口
let listen = 3000;  // 数据端口
let sliders=require('./mock/sliders');
let recommendList=require('./mock/recommendList');
let newSongs=require('./mock/newSongs');
let searchRes=require('./mock/searchResult');
let track=require('./mock/track');
let rankList=require('./mock/rankList');
let playlist=require('./mock/playlist');
let songs=require('./mock/songs');


app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'zfpx'
}));
/*app.use(function (req,res,next) {
    setTimeout(()=>{
        next()
    },100)
});*/
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
//

// 获取首页轮播图数据
// app.get('/sliders',function (req,res) {
//     console.log(sliders.banners);
//     res.json(sliders.banners);
// });
// // 获取推荐歌单
// app.get('/recommendList',function (req,res) {
//     res.json(recommendList.recomList);
// });
// // 最新歌单
// app.get('/newsong',function (req,res) {
//     res.json(newSongs.newSongList);
// });
// //
// app.get('/songmenudetail',function (req,res) {
//     res.json(track.playlist);
// });
// //
// app.get('/rankList',function (req,res) {
//     res.json(rankList.playlist);
// });
// // 获取精品歌单
// app.get('/playlist',function (req,res) {
//     res.json(playlist.playlists);
// });

app.get('/songmenudetail',function (req,res) {
    res.json(track.playlist);
});
//
app.get('/rankList',function (req,res) {
    res.json(rankList.playlist);
});
// 获取精品歌单 
/*app.get('/playlist',function (req,res) {
    res.json(playlist.playlists);
});*/





// 搜索
// app.post('/search', function (req, res) {
//     let songName = req.body.keywords.replace(/(^\s*)|(\s*$)/g, "");
//     let songLists = searchRes.result;
//     let songList = songLists.find(item => item.highlights[0] == songName);
//     console.log(songList);
//     if (songList) {
//         res.json({code: 0, success: '查找成功', songList: songList})
//     } else {
//         res.json({code: 1, error: '查找失败'})
//     }
// });

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
    let oldUser = users.find(item =>item.username == user.username);
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

//获取最新歌曲
app.get('/album', (req, res) => {
  let num = 6; // 获取的歌单数量  parseInt(req.body.num)
  request(`http://localhost:${listen}/top/artists?offset=0&limit=10`,function (error, response, data) {
    res.json(JSON.parse(data));
  });
});
//获取云音乐新歌榜
app.get('/newList', (req, res) => {
  request(`http://localhost:${listen}/top/list?idx=0`,function (error, response, data) {
    console.log(data);
    res.json(JSON.parse(data));
  });
});
//获取云音乐热歌榜
app.get('/topList', (req, res) => {
  request(`http://localhost:${listen}/top/list?idx=1`,function (error, response, data) {
    console.log(data);
    res.json(JSON.parse(data));
  });
});
//获取网易原创榜
app.get('/originalList', (req, res) => {
  request(`http://localhost:${listen}/top/list?idx=2`,function (error, response, data) {
    console.log(data);
    res.json(JSON.parse(data));
  });
});
//获取歌手专辑
app.post('/artists', (req, res) => {
  let id = parseInt(req.body.id); // 获取的歌单id
  request(`http://localhost:${listen}/artists?id=${id}`, function (error, response, data) {
    res.json(JSON.parse(data));
  })
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
        console.log(data);
        res.json(JSON.parse(data));
    })
});
app.get('/search',(req,res) => {
    request(`http://localhost:${listen}/search?keywords=${req.query.keywords}`, function (error, response, data) {
        res.json(JSON.parse(data));
    })
});



