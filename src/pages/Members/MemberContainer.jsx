import { useEffect } from 'react';
import {connect} from 'react-redux'
import { addMember, getMembers } from '../../redux/member-reducer';
import Members from './Members'

const MemberContainer = (props) => {
  useEffect(() => {
    props.getMembers()
  })

  return <Members {...props}/>
}

const mapStateToProps = (state) => {
  return {
    members: state.membersPage.members
  }
}

 export default connect(mapStateToProps, {addMember, getMembers})(MemberContainer)

