// import thunk from 'redux-thunk'
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from '../reducers/index'
//
// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
//   )
// }


import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk)),
    )
}


