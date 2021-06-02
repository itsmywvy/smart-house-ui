const TOGGLE_POPUP = 'TOGGLE_POPUP'

const initialState = {
  seen: false
}

const popupReducer = (state = initialState, action) => {
  let newState = {...state}
    switch(action.type) {
      case TOGGLE_POPUP: 
        newState.seen = !newState.seen
      default:
        return state
    }
}

export const togglePopupAction = () => ({type: TOGGLE_POPUP})

export default popupReducer