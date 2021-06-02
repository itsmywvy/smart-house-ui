const FETCHING_DATA = 'FETCHING_DATA'

const initialState = {
  controls: [
    {temperatureOutside: 21.3,light: 83, air: 36, temperatureInside: 23}
  ]
}

const HomeReducer = (state = initialState, action) => {
  // let stateCopy = {...state, ...state.controls}
  // switch(action.type) {
  //   case FETCHING_DATA :
  //     return state
  // }
    return initialState
}

export default HomeReducer