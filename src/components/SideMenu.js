/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { changeSidemenuStatus } from '../store/actions/common'

class SideMenu extends Component {
  handleClick() {
    if (this.props.changeSidemenuStatus) {
      this.props.changeSidemenuStatus(false)
    }
  }
  render() {
    let { sidemenuStatus, sidemenuList } = this.props
    return (
      <div
        className={`${sidemenuStatus ? 'show-side ' : ''}sidemenu`}
        onClick={this.handleClick.bind(this)}>
        <ul>
          {sidemenuList.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} >
                  <span>{item.name}</span>
                  <i className='fa fa-angle-right'></i>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

SideMenu.PropTypes = {
  sidemenuStatus: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    sidemenuStatus: state.commonState.sidemenuStatus,
    sidemenuList: state.commonState.sidemenuList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLeftNavState: status => {
      dispatch(changeSidemenuStatus(status))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)