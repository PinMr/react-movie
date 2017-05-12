/**
 * Created by 周军鹏 on 2017/5/11.
 */
import React, { Component } from 'react'


class LoadFilm extends Component {
    render () {
        return (
            <div className="load-more" style={{display: this.props.showLoad ? 'block' : 'none'}}>
                <i className="fa fa-spinner fa-spin"></i>
            </div>
        )
    }
}

export default LoadFilm