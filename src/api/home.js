import {get,post} from './index';
export function getSliders() {
    return get('/sliders')
}
export function getPlayList() {
    return get('/playlist');
}
export function getMv() {
    return get('/mv');
}
export function getSearch(keywords) {
    return get(`/search?keywords=${keywords}`);
}


export function getPersonalized() {
    return get(`/personalized`);
}

export function getMvFirst() {
    return get(`/mvfirst`);
}
export function getMvInfo(id) {
    return get(`/mvinfo?id=${id}`)
}
export function getOneSong(id) {
    return get(`/music?id=${id}`);
}
export function getSongMenuDetail(id) {
    return get(`/songmenudetail?id=${id}`);
}
