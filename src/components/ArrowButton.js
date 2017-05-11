/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'

class ArrowButton extends Component {
  mrGo() {
    let top = document.body.scrollTop,
        speed = 10,
        timer = setInterval(() => {
          if (document.body.scrollTop > 0) {
            document.body.scrollTop = top - speed > 0 ? top - speed : 0
            speed += Math.round(top / 10)
          } else {
            clearInterval(timer)
          }
        }, 20)
  }
  render() {
    return (
      <div
        className={this.props.arrowStatus ? 'active go-top' : 'go-top'}
        onClick={this.mrGo}>
        <i className="fa fa-arrow-up"></i>
      </div>
    )
  }
}

export default ArrowButton