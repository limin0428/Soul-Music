import * as types from "../action-types";
let initState={
    tracks:[],
    SongData:[],
    SingleData:[]
};

export function playList(state=initState,action) {
    switch (action.type){
        case types.ADD_PLAYLIST:
            return {...state,tracks:action.tracks};
        case types.GET_ONE_SONG:
            return {...state,SongData:action.SongData};
        default:
            return state
    }
}