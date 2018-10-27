import * as types from './types'
import listTravel from '../../data/listtravel.json'

const showListTravel = ()=>{
    const action = dispatch =>{
        if(listTravel){
            dispatch(setListTravel(listTravel['listTravel']));
            return listTravel['listTravel'];
        }
    }
    return action;
}

const setListTravel = (listTravel)=>{
    return {
        type: types.LIST_TRAVEL,
        listTravel
    }
}

export {
    showListTravel,
    setListTravel
}