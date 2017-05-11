/**
 * Created by billbear on 2017/5/11.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/common'
import { bindActionCreators } from 'redux'
import CityItem from '../components/CityItem'
import { hashHistory } from 'react-router'
import '../assets/css/city.css'

class City extends Component {
    constructor (props) {
        super(props)
        this.state = {
            gpsCity: this.props.city.name,
            gpsCityId: this.props.city.cityId
        }
    }
    componentWillMount() {
        this.props.actions.getCityList()
    }
    letterClick(letterInfo) {
        console.log(letterInfo)
        let letterNode = document.querySelector(`.city-list[data-title=${letterInfo}]`),
            timer
        if (letterNode) {
            let letterToTop = letterNode.offsetTop - 50
            let speed = letterToTop / 20
            let spare = letterToTop % 20
            let count = 20
            timer = setInterval(() => {
                if (count > 0) {
                    if (count === 1) speed += spare
                    document.body.scrollTop += speed
                    count--
                } else {
                    clearInterval(timer)
                }
            }, 20)
        }
    }
    changeCity(cityInfo) {
        this.props.actions.changeCity(cityInfo)
        hashHistory.push('/')
    }
    render() {
        let hotCityArr = [
                { name: '北京', id: 12 },
                { name: '上海', id: 11 },
                { name: '广州', id: 13 },
                { name: '深圳', id: 10 }
            ],
            cityIndexArr = []
        this.props.cityList.map((item, index) => {
            let letter = item.pinyin.slice(0, 1)
            if (!cityIndexArr.includes(letter)) {
                cityIndexArr.push(letter)
            }
            cityIndexArr.sort()
        })
        return (
            <div className='city'>
                <CityItem
                    city={[{name:this.state.gpsCity, id:this.state.gpsCityId}]}
                    classId={true}
                    title='GPS定位你所在的城市'
                    changeCity={this.changeCity.bind(this)} />
                <CityItem
                    city={hotCityArr}
                    title='热门城市'
                    changeCity={this.changeCity.bind(this)} />
                <CityItem
                    city={cityIndexArr}
                    title='按字母排序'
                    letterClick={this.letterClick.bind(this)}/>
                {
                    cityIndexArr.map((item, index) => {
                        let cityList = [], cityIndex = []
                        this.props.cityList.map((arr, ind) => {
                            if (item === arr.pinyin.slice(0, 1)) {
                                cityList.push(arr)
                                cityIndex.push(item)
                            }
                        })
                        return <CityItem title={item} city={cityList} key={index} changeCity={this.changeCity.bind(this)} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cityList: state.commonState.cityList,
        city: state.commonState.city
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)