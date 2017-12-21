import * as types from "../action-types";
let initState={
    sliders:[]
};

export function Sliders(state=initState,action) {
    switch (action.type){
        case types.GET_SLIDERS:
            return {...state,sliders:action.sliders};
        default:
            return state
    }
}