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

