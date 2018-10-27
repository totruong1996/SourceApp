import createReducer from '../helpers/createReduce'
import * as types from '../actions/types'

export const listFood = createReducer({},{
    [types.LIST_FOOD](state, action){
        return action;
    },
});