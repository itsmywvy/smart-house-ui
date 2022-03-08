import React from 'react';
import { connect } from 'react-redux';
import Home from './Home'
import * as axios from 'axios'
import { setData, } from '../../redux/home-reducer';
import { getMembers } from '../../redux/member-reducer';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes()
    }
    this.setTime = this.setTime.bind(this)
  }
  

  componentDidMount() {
    if(this.props.data.length === 0) {
      axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=14974bda52c7cc011989ca6bee3f41db')
          .then(response => {
            this.props.setData(response.data.list)
          })
    }
    this.timerId = setInterval(() => this.setTime(), 1000)
    this.props.getMembers()
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  setTime() {
    this.setState({
      hours: new Date().getHours() % 12 === 0 ? 12 : new Date().getHours() % 12,
      minutes: new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
    })
  }

  render() {
    return (
      <Home controls={this.props.controls}
            members={this.props.members}
            temperatureInside={this.props.temperatureInside}
            data={this.props.data}
            setHours={this.state.hours}
            setMinutes={this.state.minutes}
      />
    )
  }
}

const mapPropsToState = (state) => {
  return {
    data: state.home.data,
    controls: state.home.controls,
    members: state.membersPage.members,
    // temperatureInside: state.rooms.kitchen.temperatureC
  }
}


export default connect(mapPropsToState, {setData, getMembers})(HomeContainer)