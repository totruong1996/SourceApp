import * as LoggedOut from './loggedOut'
import * as ListHome from './showListHome'
import * as ListTravel from './showListTravel'
import * as ListFood from './showListFood'


const ActionCreators = Object.assign({},
    ListTravel,
    ListHome,
    LoggedOut,
    ListFood,
    )

export default ActionCreators;