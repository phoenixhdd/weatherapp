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
    const { weather, isLoading, isEmpty } = this.props
    // console.log(this.props)
    return (
      <div>
        {!isLoading && !isEmpty && (
          <React.Fragment>
            <h1>{weather.city.name}</h1>
            <h2>{weather.list[0].main.temp - 273.15}</h2>
          </React.Fragment>
        )}
      </div>
    )
  }
}

function mapStateToProps ({ weather }) {
  return {
    weather: weather.weather.data,
    isLoading: weather.weather.isLoading,
    isEmpty: weather.weather.isEmpty
  }
}

export default connect(mapStateToProps, { getWeather })(
  Weather
)
