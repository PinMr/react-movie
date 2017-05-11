/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class LoadError extends Component {
  mrRefresh() {
    window.location.reload()
  }
  render() {
    return (
      <div className={`${this.props.errorStatus ? 'loading-show ' : ''} error`}>
        <div className="loading-content">
          <i className="fa fa-refresh"></i>
          <p>加载失败,请点击重试</p>
          <button className="refresh" onClick={this.mrRefresh}>重试</button>
        </div>
      </div>
    )
  }
}

LoadError.propTypes = {
  errorStatus: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    errorStatus: state.commonState.errorStatus
  }
}

export default connect(mapStateToProps)(LoadError)