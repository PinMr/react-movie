/**
 * Created by billbear on 2017/5/11.
 */
import * as types from '../types'
import * as api from '../../api'
import * as common from './common'

function bannerList(data){
  return {
    type: types.HOME_BANNER,
    data
  }
}

function homeNow(data){
  return {
    type: types.HOME_NOW_PLAYING,
    data
  }
}

function homeComing(data){
  return {
    type: types.HOME_COMING_SOON,
    data
  }
}

export function homeLoad(){
  return dispatch => {
    dispatch(common.loading(true))
    Promise.all([api.getBannerList(), api.getHomeNow(), api.getHomeComing()])
      .then((data) => {
        dispatch(bannerList(data[0].data.data.billboards))
        dispatch(homeNow(data[1].data.data.films))
        dispatch(homeComing(data[2].data.data.films))
        dispatch(common.loading())
      })
      .catch(err => {
        dispatch(common.error())
        throw new Error(err)
      })
  }
}