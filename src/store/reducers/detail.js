/**
 * Created by billbear on 2017/5/12.
 */
import * as types from '../types'

const initialState = {
  filmInfo:null
}

export default function detailState(state = initialState, action) {
  switch(action.type) {
    case types.GET_FILM_INFO:
      return {...state,...{
        filmInfo: action.data
      }}
    case types.CLEAR_FILM_INFO:
      return {...state,...initialState}
    default:
      return state
  }
}