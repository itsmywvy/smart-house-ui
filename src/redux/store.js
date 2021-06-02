import {combineReducers, createStore} from 'redux'
import memberReducer from './member-reducer'

const reducers = combineReducers({
  data: memberReducer
})

const store = createStore(reducers)

export default store