/**
 * Created by 周军鹏 on 2017/5/11.
 */
import * as types from '../types'

const initialState = {
    filmList: [],
    page:{
      total:99,
      current:1
    },
    filmMore: false,
    getMore: true
}

export default function filmState(state = initialState, action) {
    switch(action.type) {
        case types.ADD_FILM_LIST:
            return {...state,...{
                filmList: state.filmList.concat(action.data.films),
                page: action.data.page
            }}
        case types.RESET_FILM_LIST:
            return {...state,...{
                filmList:[]
            }}
        case types.RESET_PAGE:
            return {...state,...{
                page: {
                  total: 99,
                  current: 1
                }
            }}
      case types.ADD_PAGE:
          return {...state,...{
               page:{
                 total: action.page.total,
                 current: ++action.page.current
               }
          }}
        case types.CAN_GET_MORE:
            return {...state,...{
                getMore: action.status
            }}
        default:
            return state
    }
}