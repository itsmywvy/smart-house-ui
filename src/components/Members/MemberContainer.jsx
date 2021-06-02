import {connect} from 'react-redux'
import { addMemberAction } from '../../redux/member-reducer';
import Members from './Members'

const mapStateToProps = (state) => {
  return {
    data: state.data.members
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMember: () => {
      dispatch(addMemberAction())
    }
  }
}

const MemberContainer = connect(mapStateToProps, mapDispatchToProps)(Members)

export default MemberContainer