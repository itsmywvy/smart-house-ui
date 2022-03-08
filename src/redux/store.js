import {applyMiddleware, combineReducers, createStore} from 'redux'
import memberReducer from './member-reducer'
import statisticsReducer from './statistics-reducer'
import billingReducer from './billing-reducer'
import roomsReducer from './rooms-reducer'
import HomeReducer from './home-reducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  membersPage: memberReducer,
  statistics: statisticsReducer,
  billing: billingReducer,
  rooms: roomsReducer,
  home: HomeReducer
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store

export default store