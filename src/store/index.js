/**
 * Created by billbear on 2017/5/11.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import commonState from './reducers/common'
import homeState from './reducers/home'

const store = createStore(
  combineReducers({
    commonState,
    homeState
  }),
  applyMiddleware(thunk)
)

export default store