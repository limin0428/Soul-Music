
//向服务器发送get请求，获取响应
//credentials 在向服务器发请求的时候要带上cookie
const HOST = 'http://localhost:9527';
export function get(url){
    return fetch(HOST+url,{
        method:'GET',
        credentials:"include",//向服务器发送cookie
        headers:{
            "Accept":"application/json",//请求头
            'Content-Type': 'application/json'
        }
    }).then(res=> res.json())//把响应体转成json
}
export function post(url,data) {

        return fetch(HOST+url, {
            method: 'POST',
            credentials:"include",//向服务器发送cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json();
             console.log(response.json());
        }).catch((err) => {
            console.log(err);
        });
    }




