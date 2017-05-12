import React from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'
import Home from '../pages/Home'
import Root from '../components/Root'
import { IS_DEV } from '../config'

/**
 * browserHistory: 类似example.com/some/path
 * hashHistory: 类似example.com/#/some/path
 */
const history = IS_DEV ? hashHistory : browserHistory;
/**
 * require.ensure: 在需要的时候才下载依赖模块
 * require.ensure(dependencies:String[],callback:function([require]),chunkName:String)
 * dependencies: 依赖的模块数组
 * callback: 回掉函数，该函数调用时会传一个reuire参数
 * chunkName: 模块名， 用于构建生成文件时命名使用
 */

const City = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../pages/City').default)
  }, 'city');
}
const Film = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../pages/Film').default)
  }, 'film/:type');
}
const Detail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../pages/Detail').default)
  }, 'detail/:name/:id');
}
const Cinema = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../pages/Cinema').default)
  }, 'cinema');
}
const PageNotFound = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../pages/PageNotFound').default)
  }, '404');
}



/**
 * IndexRoute 默认路由
 * Redirect 当匹配到不符合的路由时，默认跳转到固定的路由
 * 动态路由用getComponent引入
 */

const RouteConfig = (
  <Router history={history}>
    <Route path='/' component={Root}>
      <IndexRoute component={Home} name='卖座电影'/>
      <Route path='detail/:name/:id' getComponent={Detail}/>
      <Route path='film/:type' getComponent={Film}/>
      <Route path='cinema/:name' getComponent={Cinema}/>
      <Route path='city' getComponent={City} name='选择城市'/>
      <Route path='404' getComponent={PageNotFound} name='卖座电影'/>
      <Redirect from='*' to='/404'/>
    </Route>
  </Router>
)

export default RouteConfig