import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS
} from '../../constants/types'

const initialState = {
  weather: {
    isLoading: false,
    isEmpty: true,
    data: {}
  }
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        weather: {
          isLoading: true
        }
      }

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: {
          isLoading: false,
          isEmpty: false,
          data: action.payload
        }
      }

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        weather: {
          isLoading: false,
          isEmpty: false,
          data: {}
        }
      }

    default:
      return state
  }
}

export default weatherReducer
