import {compose, createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
const loggedMiddleware = createLogger({predicate:(getState, action)=>__DEV__});

function configureStore(initialState){
    const enchancer = compose(
        applyMiddleware(
            thunk,
            loggedMiddleware
        ),
    );
    return createStore(reducer, initialState, enchancer );
}
export default configureStore({});