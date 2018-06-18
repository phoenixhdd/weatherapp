import {API, API_KEY} from '../../constants/weather.api'
import axios from 'axios/index'

class WeatherService {
  fetchWeather = async city => {
    const res = await axios.get(`${API}?q=${city}&appid=${API_KEY}`)
    console.log(res)
    return { res }
  }
}

export default new WeatherService()
