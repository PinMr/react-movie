/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import LoadingGif from '../assets/image/loading.gif'

class LoadAnimation extends Component {
  render() {
    return (
      <div className={`${this.props.loadStatus ? 'loading-show ' : ''}loading`}>
       <div className="loading-content">
         <img src={LoadingGif} alt=""/>
         <p>正在加载,请稍候...</p>
       </div>
      </div>
    )
  }
}

LoadAnimation.propTypes = {
  loadStatus: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    loadStatus: state.commonState.loadStatus
  }
}

export default connect(mapStateToProps)(LoadAnimation)