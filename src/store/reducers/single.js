import * as types from "../action-types";
let initState={
    tracks:[]
};

export function changeSong(state=initState,action) {
    switch (action.type){
        case types.ADD_PLAYLIST:
            return {...state,tracks:action.tracks};
        default:
            return state
    }
}