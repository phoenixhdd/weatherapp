/* eslint-disable react/prop-types */
import React, { Component } from 'react'

class WeatherItem extends Component {
  render () {
    const { item } = this.props
    console.log(item)
    return (
      <div>{item.dt_txt}</div>
    )
  }
}

export default WeatherItem
