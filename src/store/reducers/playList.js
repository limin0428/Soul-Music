import * as types from "../action-types";

let initState = {
  tracks: [],
  albums: []
};

export function playList(state = initState, action) {
  switch (action.type) {
    case types.ADD_PLAYLIST:
      return {...state, tracks: action.tracks};
    case types.ADD_NEW_MUSIC_LIST:
      return {...state, albums: action.albums};
    case types.TOP_LIST:
      return {...state, top: action.albums};
    default:
      return state
  }
}