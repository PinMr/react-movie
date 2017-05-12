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
    constructor() {
      super()
      this.state = {
        url:null
      }
    }
    componentWillMount(){
      this.props.actions.fetchFilmList(this.props.page, this.props.params.type)
    }
    componentDidMount() {
      window.addEventListener('scroll', this.mrGetMore.bind(this))
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.params.type !== this.props.params.type) {
        this.props.actions.resetPage()
        this.props.actions.resetFilmList()
        this.setState({url: this.props.params.type})
      }
    }
    shouldComponentUpdate(nextProps, nextState){
      if(this.state.url !== nextState.url){
        return false
      }
      return true
    }
    componentWillUpdate (nextProps) {
      if (this.state.url && nextProps.params.type !== this.state.url) {
        this.props.actions.fetchFilmList(nextProps.page, nextProps.params.type)
        this.setState({url: null})
      }
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.mrGetMore.bind(this))
    }
    mrGetMore(){
        if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 50 && this.props.getMore){
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