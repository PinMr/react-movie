/**
 * Created by 周军鹏 on 2017/5/11.
 */
import * as types from '../types'

const initialState = {
    filmList: [],
    page: 1,
    filmMore: false,
    getMore: true
}

export default function filmState(state = initialState, action) {
    switch(action.type) {
        case types.ADD_FILM_LIST:
            return {...state,...{
                filmList: state.filmList.concat(action.data)
            }}
        case types.RESET_FILM_LIST:
            return {...state,...{
                filmList:[]
            }}
        case types.ADD_PAGE:
            console.log('111')
            return {...state,...{
                page: ++state.page
            }}
        case types.RESET_PAGE:
            return {...state,...{
                page: 1
            }}
        case types.FILM_LOADING:
            return {...state,...{
                filmMore: action.status
            }}
        case types.CAN_GET_MORE:
            return {...state,...{
                getMore: false
            }}
        default:
            return state
    }
}