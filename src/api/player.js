import {get, post} from './index';
//获取歌曲列表
export function getPlayList() {
    return get('/songmenudetail');
}

//获取最近新曲
export function getNewMusicList() {
  return get('/album');
}

//获取排行榜
export function getTopList() {
  return get('/topList');
}
getTopList()

//增加音乐
export function addMusic(){
  return post('/music')
}