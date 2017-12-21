import * as types from '../action-types';
import {reg, login, logout,validate} from '../../api/session';
import {push} from 'react-router-redux';

export default {
    reg(user) {
        return function (dispatch, getState) {
            reg(user).then(result => {
                let {code, success, error} = result;
                dispatch({
                    type: types.REG,
                    payload: {success, error}
                })
                if (code == 0) {//成功
                    dispatch(push('/login'));
                }
            })
        }
    },
    login(user) {
        return function (dispatch,getState) {
            login(user).then(result=>{
                let{code,success,error}=result;
                dispatch({
                    type:types.LOGIN,
                    payload:{success,error,user}
                });
                if(code==0){
                    dispatch(push('/'))
                }
            })
        }
    },
    logout() {
        return function (diapatch,getState) {
            logout().then(result=>{
                let {code,success,error} = result;
                diapatch({
                    type:types.LOGOUT,
                    payload:{success,error}
                });
                diapatch(push('/'));
            })
        }
    },
    clearMessages() {
        return {
            type: types.CLEAR_MESSAGES
        }
    },
    validate(){
        return function (dispatch,getState) {
            validate().then(result=>{
                let {code,success,error,user} =result;
                dispatch({
                    type:types.VALIDATE,
                    payload:{success,error,user}
                })
            })
        }
    }
}
