/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import * as actions from '../store/actions/common'
import '../assets/css/root.css'

import Header from './Header'
import ArrowButton from './ArrowButton'
import LoadAnimation from './LoadAnimation'
import LoadError from './LoadError'

class Root extends Component {
  constructor() {
    super()
    this.state = {
      arrowStatus: false
    }
  }
  componentWillMount() {
    this.props.actions.changeTitle(this.props.routes[1].name)
    this.props.actions.changeCity(this.props.city)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.mrScrollTop.bind(this))
  }
  componentWillReceiveProps(nextProps) {
    this.props.actions.changeTitle(nextProps.routes[1].name)
    this.props.actions.changeSidemenuStatus()
  }
  mrScrollTop() {
    if (document.body.scrollTop > 200) {
      this.setState({ arrowStatus: true })
    } else {
      this.setState({ arrowStatus: false })
    }
  }
  render() {
    return (
      <div className="root">
        <Header/>
        <LoadAnimation/>
        <LoadError/>
        <CSSTransitionGroup
          component="div"
          className="container"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.props.children}
        </CSSTransitionGroup>
        <ArrowButton arrowStatus={this.state.arrowStatus}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    city: state.commonState.city
  }
}

const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)