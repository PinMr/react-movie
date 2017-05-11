/**
 * Created by billbear on 2017/5/11.
 */
import * as types from '../types'


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