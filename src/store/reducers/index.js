import {combineReducers} from 'redux';

import {playList} from './playList';
import {Sliders} from  "./home"
import home from './home';
import session from './session'
import {routerReducer} from 'react-router-redux'



let reducers=combineReducers({
    playList,Sliders,

    home,
    session,
    router: routerReducer

});
export default reducers;