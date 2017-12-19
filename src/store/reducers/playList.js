import {ADD_PLAYLIST} from "../action-types";
export default function (state=[],action) {
    switch (action.types){
        case ADD_PLAYLIST:
            return [...state,{}]
    }
}