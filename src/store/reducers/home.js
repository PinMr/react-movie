/**
 * Created by billbear on 2017/5/11.
 */
import * as types from '../types'

const initialState = {
  banner:[],
  nowPlaying:[],
  comingSoon:[]
}

export default function homeState(state = initialState, action){
  switch(action.type){
    case types.HOME_BANNER:
      return {...state, ...{
        banner: action.data
    }}
    case types.HOME_NOW_PLAYING:
      return {...state, ...{
        nowPlaying: action.data
      }}
    case types.HOME_COMING_SOON:
      return {...state, ...{
        comingSoon: action.data
      }}
    default:
      return state
  }
}