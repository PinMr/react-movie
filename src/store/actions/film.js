/**
 * Created by 周军鹏 on 2017/5/11.
 */
import * as api from '../../api'
import * as common from './common'
import * as types from '../types'

function filmList(data){
    return {
        type: types.ADD_FILM_LIST,
        data
    }
}

function getMore(status){
    return {
        type: types.CAN_GET_MORE,
        status
    }
}

export function addPage(page) {
    return {
      type: types.ADD_PAGE,
      page
    }
}

export function fetchFilmList(page, type){
    return dispatch => {
        if (page.current === 1) dispatch(common.loading(true))
        if (page.total >= page.current) {
          dispatch(getMore(true))
          api.getFilmPage(page.current, type)
            .then(data => {
              dispatch(filmList(data.data.data))
              dispatch(common.loading(false))
              dispatch(addPage(data.data.data.page))
            })
            .catch(err => {
              if (page.current == 1) dispatch(common.error())
              dispatch(getMore(false))
            })
        } else {
          dispatch(getMore(false))
        }
    }
}

export function resetFilmList(){
    return {
        type: types.RESET_FILM_LIST
    }
}


export function resetPage() {
  console.log('reset page')
    return {
        type: types.RESET_PAGE
    }
}

export function changeLoading(status = false) {
    return {
        type: types.FILM_LOADING,
        status
    }
}
