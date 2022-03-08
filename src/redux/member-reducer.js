import { membersAPI } from "../api/api"

const ADD_MEMBER = 'ADD_MEMBER'
const SET_MEMBERS = 'SET_MEMBERS'

const initialState = {
  members: []
}

const memberReducer = (state = initialState, action) => {

  let stateCopy = {...state}
  stateCopy.members = [...state.members]
  switch(action.type) {
    case ADD_MEMBER : 
      let newMember = {
        id: 4,
        name: action.name,
        avatarSrc: null,
        role: null,
        status: false,
        room: ''
      }
      stateCopy.members.push(newMember)
      return stateCopy
    case SET_MEMBERS :
      return {...state, members: action.payload}
    default :
      return state
  }
}

export const addMemberAC = () => ({type: ADD_MEMBER})
export const setMembersAC = (payload) => ({type: SET_MEMBERS, payload})

export const addMember = () => (dispatch) => {
  membersAPI.addMember().then(res => {
    alert(res)
  })
}

export const getMembers = () => (dispatch) => {
  membersAPI.getMembers().then(res => {
    dispatch(setMembersAC(res))
  })
}

export default memberReducer