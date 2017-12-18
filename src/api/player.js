import {get, post} from './index';
//获取轮播图
export function getPlayList() {
    return get('/api/');
}
