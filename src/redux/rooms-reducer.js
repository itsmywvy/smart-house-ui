import { roomsAPI } from '../api/api';

const CONVERT_TO_FAHRENHEIT = 'CONVERT_TO_FAHRENHEIT'
const SET_DATA = 'SET_DATA'


const initialState = {
  temperatureF: 0,
}

const roomsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONVERT_TO_FAHRENHEIT :
      return {
        ...state,
        temperatureF: Math.ceil(action.temperature * 9 / 5 + 32)
      }
    case SET_DATA :
      return {
        ...state,
        ...action.data
      }
    default :
      return state
  }
}

export const convertToFahrenheit = (temperature) => ({type: CONVERT_TO_FAHRENHEIT, temperature})
export const setDataAC = (data) => ({type: SET_DATA, data})

export const setData = (id) => (dispatch) => {
  roomsAPI.getRoomsData(id).then(res => {
    dispatch(setDataAC(res))
  })
}

export default roomsReducer