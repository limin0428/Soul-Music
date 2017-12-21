import * as types from '../action-types'
import {getSliders} from '../../api/home'

let actions = {
    fetchSliders() {
        return function (dispatch, getState) {
            getSliders().then(res => {
                console.log(res);
                dispatch({
                    type: types.GET_SLIDERS ,
                    sliders: res
                })
            })
        }
    }
};
export default actions;