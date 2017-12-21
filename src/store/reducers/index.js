import {combineReducers} from 'redux';
import {playList} from './playList';
import {Sliders} from  "./home"
let reducers=combineReducers({
    playList,Sliders
});
export default reducers;