/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import * as actions from '../store/actions/home'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { formateDate } from '../config'
import { Link } from 'react-router'
import '../assets/css/home.css'

class Home extends Component {
  componentWillMount() {
    this.props.actions.homeLoad()
  }
  renderNowPlay(){
    const { nowPlaying } = this.props
    if(nowPlaying.length === 0) return
    let nowplayList = []
    for (let [index, item] of nowPlaying.entries()) {
      nowplayList.push(
        <div className='item' key={index}>
          <Link to={`detail/${item.name}/${item.id}`}>
            <img src={item.cover.origin} alt=""/>
            <div className='desc'>
              <div className='info'>
                <h4>{item.name}</h4>
                <p>{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
              </div>
              <div className='count'>{item.grade}</div>
            </div>
          </Link>
        </div>
      )
    }
    return (
      <div className='now-playing'>
        {nowplayList}
        <div className='more-button'><Link to='/film/now-playing' className='go-more'>更多热映电影</Link></div>
      </div>
    )
  }
  renderComing(){
    const { comingSoon } = this.props
    if (comingSoon.length === 0) return
    let comingList = []
    comingSoon.map((item, index) => {
      comingList.push(
        <div className='item' key={index}>
          <Link to={{pathname:'detail', query:{id:item.id}}}>
            <img src={item.cover.origin} alt=""/>
            <div className='desc'>
              <div className='info'>
                <h4>{item.name}</h4>
              </div>
              <div className='time'>{formateDate(item.premiereAt).date}</div>
            </div>
          </Link>
        </div>
      )
    })
    return (
      <div className='coming-soon'>
        <div className="coming-line">
          <div className="upcoming">即将上映</div>
        </div>
        {comingList}
        <div className="more-button"><Link to='/film/coming-soon'>更多即将上映电影</Link></div>
      </div>
    )
  }
  render () {
    let nowplayList = this.renderNowPlay(),
      comingList = this.renderComing(),
      ReactSwipableView = autoPlay(SwipeableViews),
      { banner } = this.props
    return (
      <div className='home'>
        <ReactSwipableView>
          {banner.map((item, index) => {
            return (
              <div className='slide' key={index}>
                <a href={item.url} target='_blank'><img src={item.imageUrl} /></a>
              </div>
            )
          })
          }
        </ReactSwipableView>
        {nowplayList}
        {comingList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    banner: state.homeState.banner,
    nowPlaying: state.homeState.nowPlaying,
    comingSoon: state.homeState.comingSoon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)