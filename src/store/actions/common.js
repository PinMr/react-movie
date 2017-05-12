/**
 * Created by billbear on 2017/5/11.
 */
import * as types from '../types'
import * as api from '../../api'
import * as common from './common'

export function changeTitle(title = '卖座电影'){
  document.title = title
  return {
    type: types.COMMON_TITLE,
    title
  }
}

export function loading(loading = false) {
  return {
    type: types.COMMON_LOADING_STATUS,
    loading
  }
}

export function changeSidemenuStatus(status = false){
  return {
    type: types.COMMON_SIDEMENU_STATUS,
    status
  }
}

export function changeCity(city) {
  document.cookie = `city=${city.name}`
  document.cookie = `cityId=${city.cityId}`
  return {
    type: types.COMMON_CITY,
    city
  }
}


export function error(status = true) {
  return {
    type: types.COMMON_ERROR_STATUS,
    status
  }
}

export function changeError(status) {
  return dispatch => {
    dispatch(error(status))
  }
}

function changeCityList(data){
  return {
    type: types.COMMON_CITY_LIST,
    data
  }
}

export function getCityList(){
  return dispatch => {
    dispatch(common.loading(true))
    api.getCityList()
        .then(data => {
          dispatch(changeCityList(data.data.data.cities))
          dispatch(common.loading(false))
        })
        .catch(err => {
          dispatch(common.error())
          throw new Error(err)
        })
  }
}