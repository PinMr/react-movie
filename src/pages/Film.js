/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions/film'
import FilmItem from '../components/FilmItem'
import LoadFilm from '../components/LoadFilm'
import '../assets/css/film.css'

class Film extends Component {
    constructor(){
        super()
        this.state = {
            scrollTop:''
        }
    }
    componentWillMount(){
        this.props.actions.resetFilmList()
        this.props.actions.fetchFilmList(this.props.page, this.props.params.type)
    }
    componentDidMount(){
        if(this.props.getMore) window.addEventListener('scroll', this.mrGetMore.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.mrGetMore.bind(this))
    }
    mrGetMore(){
        if (document.body.scrollTop + window.innerHeight === document.body.scrollHeight){
            window.removeEventListener('scroll', this.mrGetMore.bind(this))
            this.props.actions.fetchFilmList(this.props.page, this.props.params.type)
        }
    }
    render(){
        return (
            <div className="film">
                <div className="film-nav">
                    <ul>
                        <li><Link to="/film/now-playing" activeClassName="choose">正在热映</Link></li>
                        <li><Link to="/film/coming-soon" activeClassName="choose">即将上映</Link></li>
                    </ul>
                </div>
                <FilmItem filmList={this.props.filmList}/>
                <LoadFilm showLoad={this.props.getMore} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmList:state.filmState.filmList,
        page:state.filmState.page,
        filmMore:state.filmState.filmMore,
        getMore: state.filmState.getMore
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions:bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Film)