/**
 * Created by billbear on 2017/5/11.
 */
import * as types from '../types'

const initialState = {
  title: '卖座电影',
  city: {
    name: '深圳',
    cityId: 10
  },
  sidemenuStatus: false,
  sidemenuList: [
    { name: '首页', url: '/' },
    { name: '影片', url: '/film/now-playing' },
    { name: '影院', url: '/cinema' },
    { name: '商城', url: '/shop' },
    { name: '我的', url: '/mine' },
    { name: '卖座卡', url: '/card' }
  ],
  loadStatus: false,
  errorStatus: false
}

export default function commonState(state = initialState, action) {
  switch(action.type) {
    case types.COMMON_TITLE:
      return {...state, ...{

      }};
    case types.COMMON_LOADING_STATUS:
      return {...state, ...{
        loadStatus: action.loading
      }}
    case types.COMMON_SIDEMENU_STATUS:
      return {...state, ...{
          sidemenuStatus: action.status
      }}
    case types.COMMON_CITY:
      return {...state, ...{

      }}
    case types.COMMON_ERROR_STATUS:
      return {...state,...{
        errorStatus: action.status
      }}
    default:
      return state
  }
}