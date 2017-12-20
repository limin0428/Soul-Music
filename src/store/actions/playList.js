import * as types from '../action-types'
import {getPlayList} from '../../api/player'

let actions = {
    fetchPlayList() {
        return function (dispatch, getState) {
            getPlayList().then(res => {
                console.log(res);
                dispatch({
                    type: types.ADD_PLAYLIST
                    , tracks: res.tracks
                })
            })
        }
    }
};
export default actions;