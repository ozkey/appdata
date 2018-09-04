import { combineReducers } from 'redux'
import appDataReducer from '../../redstone-form/redux/appDataReducer'

const appReducer = combineReducers({
  appData: appDataReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
