import {get, post} from './index';
//获取歌曲列表


export function getPlayList(id) {
    return post('/music',id);
}
getPlayList(467668);