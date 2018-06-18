import {API, API_KEY} from '../../constants/weather.api'
import axios from 'axios/index'

class WeatherService {
  fetchWeather = async city => {
    return axios.get(`${API}?q=${city}&appid=${API_KEY}`)
  }
}

export default new WeatherService()
