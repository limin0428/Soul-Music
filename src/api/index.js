
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
//url后台地址 data 请求体
//
//export function post(url,id) {
//     console.log(id);
//     // return fetch(HOST+url, {
//     //     method:'POST',
//     //     headers: {
//     //         'Accept': 'application/json',
//     //         'Content-Type': 'application/json'
//     //     },
//     //     body:JSON.stringify({'data':json})
//     // }).then(res => res.json()).then(json =>dispatch(receivePosts(json))).catch(error=>dispatch(requestExceptions(error)));
//
//     return fetch(HOST+url,{
//         method:'POST',//请求方法
//         //credentials:"include",
//         headers:{//请求头
//
//             "Accept":"application/json",//告诉服务器我客户端需要的数据类型
//             "Content-Type":"application/json",
//         },
//         body:JSON.stringify({'id':id})//请求体格式
//     }).then(function(response) {
//         console.log(response.json());
//     }).catch(function(err) {
//             console.log('Fetch Error :-S', err);
//     });
// }
export function post(url,id) {
        return fetch(HOST+url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'id':id})
        }).then((response) => {
             console.log(response.json());
        }).then((json) => {
                let hasError = false;
                let text = '';
                /// /api/list正常返回格式{errcode:0,errmsg:'',data:[]}
                if (json.errcode !== 0) {
                    hasError = true;
                    text = json.errmsg;
                } else {
                    hasError = false;
                    text = '';
                }
                // 网络异常 如断网
                if (json.error) {
                    dispatch(success({
                        msg: strings.NET_ERROR,
                        data: false
                    }));
                }
                // 正常业务处理
                else {
                    dispatch(success({
                        msg: hasError ? text : '',
                        data: !hasError
                    }));
                }
            })
            .catch((err) => {
                dispatch(success({
                    msg: (__DEBUG__ && err.message) ? err.message : strings.NET_ERROR,
                    data: false
                }));
            });
    }

