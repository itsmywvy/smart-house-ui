import { roomsAPI } from '../api/api';

const CONVERT_TO_FAHRENHEIT = 'CONVERT_TO_FAHRENHEIT';
const SET_ROOMS = 'SET_ROOMS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
  currentRoom: 'kitchen',
  isFetching: false,
};

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONVERT_TO_FAHRENHEIT:
      return {
        ...state,
        temperatureF: Math.ceil((action.temperature * 9) / 5 + 32),
      };
    case SET_ROOMS:
      return {
        ...state,
        ...action.data,
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const convertToFahrenheit = (temperature) => ({ type: CONVERT_TO_FAHRENHEIT, temperature });
export const setRoomsAC = (data) => ({ type: SET_ROOMS, data });
const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });

export const setRooms = () => (dispatch) => {
  dispatch(toggleFetching(true));
  roomsAPI.getRoomsData().then((res) => {
    dispatch(setRoomsAC(res));
    dispatch(toggleFetching(false));
  });
};

export default roomsReducer;
