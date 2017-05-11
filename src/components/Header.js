/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { changeSidemenuStatus } from '../store/actions/common'


class Header extends Component {
  mrMenuClick() {
    this.props.sidemenu(!this.props.sidemenuStatus)
  }
  render() {
    return (
      <header className="header">
        <h1>
          <span className="go-menu" onClick={this.mrMenuClick.bind(this)}><i className="fa fa-bars"></i></span>
          <div className="title">{this.props.title}</div>
        </h1>
        <div className="header-right">
          <Link className="go-city" to="/city">{this.props.city.name}&nbsp;<i className="fa fa-angle-down"></i></Link>
          <span className="go-mine"><i className="fa fa-user"></i></span>
        </div>
      </header>
    )
  }
}
//类型校验
Header.propTypes = {
  title: PropTypes.string.isRequired,
  sidemenuStatus: PropTypes.bool.isRequired,
  sidemenu: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    title: state.commonState.title,
    sidemenuStatus: state.commonState.sidemenuStatus,
    city: state.commonState.city
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sidemenu: status => {
      dispatch(changeSidemenuStatus(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)