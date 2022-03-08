import React from 'react'
import { connect } from "react-redux";
import { convertToFahrenheit, setData } from "../../redux/rooms-reducer";
import Rooms from "./Rooms";

class RoomsContainer extends React.Component {
  componentDidMount() {
    // axios.get('http://api.openweathermap.org/data/2.5/weather?q=Gagra&appid=14974bda52c7cc011989ca6bee3f41db')
    //   .then(response => this.props.setData(response.data.main))
    let id = 1
    this.props.setData(id)
  }

  render() {
    return(
      <Rooms {...this.props}/>
    )
  }
}

const mapPropsToState = (state) => {
  return {
    room: state.rooms,
  }
} 

export default connect(mapPropsToState, {convertToFahrenheit, setData})(RoomsContainer)