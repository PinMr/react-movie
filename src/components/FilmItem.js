/**
 * Created by 周军鹏 on 2017/5/11.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { formateDate } from '../config'

class FilmItem extends Component {

    mrFilmCount (item) {
        if (item.isNowPlaying) {
            return (
                <div className="film-counts">
                    <span className="film-count-color">{item.cinemaCount}</span>
                    <span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="film-count-color">{item.watchCount}</span>
                    <span>人购票</span>
                </div>
            )
        } else {
            return (
                <div className="film-date">
                    <span>{formateDate(item.premiereAt).date}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>{formateDate(item.premiereAt).day}</span>
                </div>
            )
        }
    }
    mrGetMore(){
        // if ()
    }
    render() {
        return (
            <ul>
                {this.props.filmList.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={`detail/${item.name}/${item.id}`}>
                                <div className="film-item">
                                    <div className="film-item-img">
                                        <img className="img-responsive" src={item.poster.thumbnail}/>
                                    </div>
                                    <div className="film-desc">
                                        <div className="film-next-arrow">
                                            <i className="fa fa-angle-right"></i>
                                        </div>
                                        <div className="film-grade" style={{display: item.isNowPlaying ? 'block' : 'none'}}>{item.grade}</div>
                                        <div className="film-name">{item.name}</div>
                                        <div className="film-intro">{item.intro}</div>
                                        {this.mrFilmCount(item)}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default FilmItem