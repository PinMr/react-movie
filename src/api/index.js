/**
 * Created by billbear on 2017/5/11.
 */
import axios from 'axios'

let ax = axios.create({
  baseURL:'http://m.maizuo.com/v4/api/',
  timeout:8000
})

let time = new Date() * 1

// 获取首页banner图
export function getBannerList() {
  return ax.get(`billboard/home?t=${time}`)
}

function getFilmList(page = 1, count = 5, type = 'now-playing') {
  return ax.get(`film/${type}?page=${page}&count=${count}`)
}

//获取首页热映电影
export function getHomeNow() {
  return getFilmList()
}

//获取首页即将上映列表
export function getHomeComing() {
  return getFilmList(1, 3, 'coming-soon')
}

// //获取热映列表
// export function getNowList(page){
//   return getFilmList(page, 7)
// }
// //获取即将上映列表
// export function getComingList(page){
//   return getFilmList(page, 7, 'coming-soon')
// }
export function getFilmPage(page, type){
  return getFilmList(page, 7, type)
}

//获取城市列表
export function getCityList(){
  return ax.get(`city?__t=${time}`)
}