let express = require('express');
let request = require('request');
let app = express();
app.listen(3000, () => {
    console.log('3000 ok');
});

//首页
app.get('/restaurants', (req, res) => {
    let offset = parseInt(req.query.offset);
    //商店列表  参数 offset
    request(`http://localhost:3000/banner`, function (error, response, data) {
        res.send(data);
    })
});