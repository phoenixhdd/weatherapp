/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getWeather } from '../../state/actions/weather.action'

class Weather extends Component {
  state = {
    currentCity: 'Warsaw'
  }

  componentDidMount () {
    this.props.getWeather(this.state.currentCity)
  }

  render () {
    const { weather } = this.props
    console.log(weather)
    return (
      <div>
        asdas
      </div>
    )
  }
}

function mapStateToProps ({ weather }) {
  return { weather: weather }
}

export default connect(mapStateToProps, { getWeather })(
  Weather
)
