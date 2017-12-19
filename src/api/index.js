
//向服务器发送get请求，获取响应
//credentials 在向服务器发请求的时候要带上cookie
const HOST = 'http://localhost:9527';
export function get(url){
    return fetch(HOST+url,{
        method:'GET',
        credentials:"include",//向服务器发送cookie
        headers:{
            "Accept":"application/json",//请求头
        }
    }).then(res=>res.json())//把响应体转成json
}
export function post(url,id) {
        return fetch(HOST+url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'id':id})
        }).then((response) => {
        }).catch((err) => {
        dispatch(success({
            msg: (__DEBUG__ && err.message) ? err.message : strings.NET_ERROR,
            data: false
        }));
    });
}

