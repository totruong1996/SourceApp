import * as types from './types'
import user from '../../data/user.json'
const  logIn=(email, password)=>{
    const action = dispatch =>{
        if(email===user.email && password===user.password){
            dispatch(setLoggedInState(true));
            return true
        }
        dispatch(setLoggedInState(false));
        return false
    }
    return action;
}

const setLoggedInState=(loggedInState)=>{
    return {
        type: types.SET_LOGGED_IN_STATE,
        loggedInState
    }
}

export {
    logIn,
    setLoggedInState
}