/**
 * Created by 周军鹏 on 2017/5/11.
 */
import React, { Component } from 'react'


class LoadFilm extends Component {
    render () {
        return (
            <div className="load-more">
              {this.props.showLoad ?
                 (<i className="fa fa-spinner fa-spin"></i>)
                : (<div className="underline"><p>我也是有底线的</p></div>) }
            </div>
        )
    }
}

export default LoadFilm