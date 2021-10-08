import { combineReducers } from 'redux'
import SafeReducer from './safe/safeReducer'
const rootReducer = combineReducers({
    SafeReducer: SafeReducer
  })
  
  export default rootReducer;
