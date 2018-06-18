import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS
} from '../../constants/types'

import weatherService from '../services/weather'

export const getWeather = city => async dispatch => {
  dispatch({ type: FETCH_WEATHER_START })
  try {
    const res = await weatherService.fetchWeather(city)
    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res.data })
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_FAILURE })
  }
}
