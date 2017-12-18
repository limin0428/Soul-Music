import {get, post} from './index';
//获取歌曲列表
export function getPlayList(data) {
    return post(`/music`,data);
}
