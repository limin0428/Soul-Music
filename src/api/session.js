
import {get,post} from './index';
//注册
export function reg(user) {
    return post('/reg',user)
}
//登录
export function login(user) {
    return post('/login',user)
}
//退出
export function logout() {
    return get('/logout')
}

export function validate() {
    return get('/validate')
}


