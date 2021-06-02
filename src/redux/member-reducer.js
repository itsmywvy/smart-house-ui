const ADD_MEMBER = 'ADD_MEMBER'

const initialState = {
  members: [
    {
      id: 1,
      name: 'Annie Gulberg',
      avatarSrc: 'https://images.ctfassets.net/hrltx12pl8hq/6YSoTmOYPk2VtQ7JSkPuzS/8250a3d54c1a714aa5e57f6a2826509e/shutterstock_1554086789.jpg?fit=fill&w=480&h=270',
      role: 'Owner',
      status: 'At home',
      room: 'Bedroom 1'
    },
    {
      id: 2,
      name: 'John Gulberg',
      avatarSrc: 'http://www.freedigitalphotos.net/images/category-images/118.jpg',
      role: 'Owner',
      status: 'At home',
      room: 'Bedroom 1'
    },
    {
      id: 3,
      name: 'Marie Gulberg',
      avatarSrc: 'https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'Owner',
      status: 'Out',
      room: 'Bedroom 2'
    }
  ]
}

const memberReducer = (state = initialState, action) => {

  let stateCopy = {...state}
  stateCopy.members = [...state.members]
  switch(action.type) {
    case ADD_MEMBER : {
      let newMember = {
        id: 4,
        name: 'Heh',
        avatarSrc: null,
        role: 'Owner',
        status: 'At home',
        room: 'Bathroom'
      }
      stateCopy.members.push(newMember)
      return stateCopy
    }
    default :
      return state
  }
}

export const addMemberAction = () => ({type: ADD_MEMBER})

export default memberReducer