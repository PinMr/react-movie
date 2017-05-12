/**
 * Created by 周军鹏 on 2017/5/11.
 */
import React, { Component } from 'react'

class CityItem extends Component {
    handleClick(name, id, event){
        this.props.changeCity({name, cityId:id})
    }
    handleSkipCity(name, event){
        if (this.props.letterClick) {
            this.props.letterClick(name)
        }
    }
    render() {
        return (
            <div className='city-list' data-title={this.props.title}>
                <div className='city-title'>{this.props.title}</div>
                <div className="city-detail">
                    <ul>
                        {this.props.city.map((item, index) => {
                            if (typeof item === 'string') return <li className='city-item' key={index} onClick={this.handleSkipCity.bind(this, item)}>{item}</li>
                            return <li className={`${this.props.classId ? 'city-item-active ' : ''}city-item`} key={index} onClick={this.handleClick.bind(this, item.name, item.id)}>{item.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}


export default CityItem