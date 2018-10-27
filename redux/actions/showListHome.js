import * as types from './types'
import listHome from '../../data/listhome.json'

const  showListHome=()=>{
    const action = dispatch =>{
        if(listHome){
            dispatch(setListHome(listHome['listhome']));
           return listHome['listhome'];      
        }
    }
    return action;
}
const setListHome=(listHome)=>{
    return {
        type: types.LIST_HOME,
        listHome,
    }
}

export {
    showListHome,
    setListHome,

}