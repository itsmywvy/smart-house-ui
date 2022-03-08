import React from 'react';
import Statistics from './Statistics'
import { connect } from 'react-redux'
import * as axios from 'axios';
import { setElecDataAC, setWaterDataAC } from '../../redux/statistics-reducer';

class StatisticsContainer extends React.Component {
  componentDidMount() {
    axios.get('https://www.random.org/integers/?num=12&min=1&max=100&col=1&base=10&format=plain&rnd=new')
    .then(response => {
      let arr = []
      for (let i = 0; i < response.data.length;i++) {
        arr.push(Number(response.data[i] + '' + response.data[i + 1]))
      }
      this.props.setElecData(arr)
      this.props.setWaterData(arr)
    })
  }

  render() {
    return <Statistics electricity={this.props.electricity}
                        water={this.props.water}
                        waste={this.props.waste}
                        sorting={this.props.sorting}
                        options={this.props.options}
      />
  }
}

const mapStateToProps = (state) => { // => props.water
  return {
    electricity: state.statistics.electricity,
    water: state.statistics.water,
    waste: state.statistics.waste,
    sorting: state.statistics.sorting,
    options: state.statistics.options,
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    setElecData: (data) => {
      dispatch(setElecDataAC(data))
    },
    setWaterData: (data) => {
      dispatch(setWaterDataAC(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToState)(StatisticsContainer)
