import {combineReducers} from 'redux'
import * as LoggedOut from './loggedOut'
import * as ListHome from './showListHome'
import * as ListTravel from './showListTravel'
import * as ListFood from './showListFood'

export default combineReducers(Object.assign(  
    LoggedOut,
    ListHome,
    ListTravel,
    ListFood,
    
))