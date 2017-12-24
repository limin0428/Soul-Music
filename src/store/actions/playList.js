import * as types from '../action-types'
import {getSongMenuDetail,getOneSong} from '../../api/home'

let actions = {
    fetchPlayList(id) {
        return function (dispatch, getState) {
            getSongMenuDetail(id).then(res => {

                dispatch({
                    type: types.ADD_PLAYLIST
                    , tracks:res.playlist.tracks.slice(0,10)
                })
            })
        }
    },
    fetchGetSong(id) {
        return function (dispatch, getState) {
            getOneSong(id).then(res => {
                console.log("123",res.data[0].url);
                dispatch({
                    type: types.GET_ONE_SONG
                    , SongData: res.data
                })

            })
        }
    },
};
export default actions;