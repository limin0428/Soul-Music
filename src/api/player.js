import {get, post} from './index';
//获取歌曲列表
export function getPlayList(id) {
    console.log(id);
    return post('/music',id);
}
getPlayList(347232)