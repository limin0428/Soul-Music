import * as types from '../action-types'
import {getPlayList} from '../../api/player'

let actions ={
    fetchPlayList(){
        return function (dispatch,getState) {
            dispatch({
                type:types.ADD_PLAYLIST,
                payload:getPlayList()
            })
        }
    }
};
export default actions;