import * as types from "../action-types";


export function playList(state={},action) {
    switch (action.type){
        case types.ADD_PLAYLIST:
            return action.payload;
        default:
          return state
    }
}