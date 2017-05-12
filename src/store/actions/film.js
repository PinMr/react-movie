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

function getMore(){
    return {
        type: types.CAN_GET_MORE
    }
}

function addPage() {
    return {
        type: types.ADD_PAGE
    }
}

export function fetchFilmList(page, type){
    return dispatch => {
        if (page == 1) dispatch(common.loading(true))
        dispatch(changeLoading(true))
        api.getFilmPage(page, type)
            .then(data => {
                    dispatch(addPage())
                    dispatch(filmList(data.data.data.films))
                    dispatch(changeLoading(false))
                    dispatch(common.loading())
                    // dispatch(getMore())
                    dispatch(changeLoading(false))
                    dispatch(common.loading())
            })
            .catch(err => {
                dispatch(common.error(true))
            })
    }
}

export function resetFilmList(){
    return {
        type: types.RESET_FILM_LIST
    }
}


export function resetPage() {
    return {
        type: types.RESET_PAGE
    }
}

export function changeLoading(status) {
    return {
        type: types.FILM_LOADING,
        status
    }
}
