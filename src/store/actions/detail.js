/**
 * Created by billbear on 2017/5/12.
 */
import * as api from '../../api'
import * as common from './common'
import * as types from '../types'


function filmInfo(data) {
  return {
    type: types.GET_FILM_INFO,
    data
  }
}

export function getFilmInfo(id) {
  return dispatch => {
    dispatch(common.loading(true))
    api.getFilmDetail(id)
      .then(res => {
        dispatch(filmInfo(res.data.data.film))
        dispatch(common.loading(false))
      })
      .catch(err => {
        dispatch(common.error(true))
        throw new Error(err)
      })
  }
}

export function clearFilmInfo() {
  return {
    type: types.CLEAR_FILM_INFO
  }
}
