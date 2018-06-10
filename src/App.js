/* eslint-disable no-undef,no-unused-expressions */
import React, { Component } from 'react'
import axios from 'axios'
import { debounce } from 'throttle-debounce'

import { API, API_KEY } from 'constants/weather.api'

class App extends Component {
  state = {
    currentWeather: null,
    currentCity: 'Warsaw',
    city: 'Warsaw'
  }

  async componentDidMount () {
    const res = await axios.get(`${API}?q=${this.state.currentCity}&appid=${API_KEY}`)
    const data = res.data
    this.setState({currentWeather: data})
  }

  async getCities (city) {
    try {
      const res = await axios.get(`${API}?q=${city}&appid=${API_KEY}`)
      const data = res.data
      this.setState({currentWeather: data, city: city})
    } catch (error) {
      console.log('City not found')
    }
  }

  getCityName = debounce(1000, city => {
    if (city === '') {
      console.log('pole nie moze byc puste')
    } else {
      this.getCities(city)
    }
  })

  render () {
    const { currentWeather: weather } = this.state
    return (
      <div>
        {weather && weather.name}

        {weather && (weather.main.temp - 273.15)}

        <input onChange={e => { this.getCityName(e.target.value) }} />
      </div>
    )
  }
}

export default App
