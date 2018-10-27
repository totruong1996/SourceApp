import *  as types from './types'
import listFood from '../../data/listfood.json'

const showListFood  = () =>{
    const action = dispatch =>{
        if(listFood){
            dispatch(setListFood(listFood['listFood']))
        }
    }
    return action;
}
const setListFood = (listFood)=>{
    return {
        type : types.LIST_FOOD,
        listFood,
    }
}

export {
    showListFood,
    setListFood
}