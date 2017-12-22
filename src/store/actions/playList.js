import * as types from '../action-types'
import {getPlayList,getNewMusicList,getTopList} from '../../api/player'

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
    },
    fetchNewMusicList() {
    return function (dispatch, getState) {
      getNewMusicList().then(res => {
        console.log(res);
        dispatch({
          type: types.ADD_NEW_MUSIC_LIST
          , albums: res.artists
        })
      })
    }
  },
  fetchTopList() {
    return function (dispatch, getState) {
      getTopList().then(res => {
        console.log(res);
        dispatch({
          type: types.TOP_LIST
          , top: res
        })
      })
    }
  }
};
export default actions;