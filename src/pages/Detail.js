/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getFilmInfo, clearFilmInfo } from '../store/actions/detail'
import { changeTitle } from '../store/actions/common'
import { formateDate } from '../config'
import '../assets/css/film.css'

class Detail extends Component {
  componentWillMount() {
    this.props.changeTitle(this.props.params.name)
    this.props.getFilmInfo(this.props.params.id)
  }
  componentDidMount(){
    this.props.clearFilmInfo()
  }
  render() {
    let { filmInfo } = this.props
    console.log(filmInfo)
    if (!filmInfo) return <div></div>
    return (
      <div className="detail">
        <div className="detail-banner">
          <img src={filmInfo.cover.origin} alt=""/>
        </div>
        <div className="film-detail">
          <div className="film-title">影片简介</div>
          <div className="director detail-common">
            <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
            <span>{filmInfo.director}</span>
          </div>
          <div className="performer detail-common">
            <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
            {filmInfo.actors.map((item, index) => {
              return <span key={index}>{item.name}&nbsp;|&nbsp;</span>
            })}
          </div>
          <div className="language detail-common">
            <span>地区语言：</span>
            <span>{filmInfo.nation}({filmInfo.language})</span>
          </div>
          <div className="film-type detail-common">
            <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
            <span>{filmInfo.category}</span>
          </div>
          <div className="now-date detail-common">
            <span>上映日期：</span>
            <span>{formateDate(filmInfo.premiereAt).date}</span>
          </div>
          <div className="film-content">{filmInfo.synopsis}</div>
        </div>
        <div className="operation">
          <Link to={`cinema/${filmInfo.name}`}><button>立即购票</button></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filmInfo:state.detailState.filmInfo
  }
}

const mapDispacthToProps = dispatch => {
  return {
    getFilmInfo: id => {
      dispatch(getFilmInfo(id))
    },
    clearFilmInfo:() => {
      dispatch(clearFilmInfo())
    },
    changeTitle: title => {
      dispatch(changeTitle(title))
    }
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Detail)