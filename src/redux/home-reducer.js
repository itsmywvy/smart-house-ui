const SET_DATA = 'SET_DATA'

const initialState = {
  controls: {temperatureOutside: 21.3,light: 83, air: 36},
  data: []
}

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: [...state.data, action.data]
      }
    default:
      return state
  }
}

export const setData = (data) => ({type: SET_DATA, data})

export default HomeReducer