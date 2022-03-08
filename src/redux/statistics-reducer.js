const SET_ELEC_DATA = 'SET_ELEC_DATA'
const SET_WATER_DATA = 'SET_WATER_DATA'

const initialState = {
  electricity: 
    {
      labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
                    {
                      data: [52, 64, 57, 69, 43, 42, 41, 58, 41, 67, 76, 39],
                      backgroundColor: '#EE777F',
                      borderColor: '#ee777f',
                      tension: 0.5,
                    },
        ]
    }
  ,
  water: {
      labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [
                  {
                    data: [36, 53, 54, 70, 38, 58, 38, 45, 51, 64, 62, 57],
                    backgroundColor: '#65BDC0',
                    borderColor: '#65BDC0',
                    tension: 0.5,
                  },
      ]
  },
  waste : {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
                {
                  data: [68, 32, 34, 66, 74, 55, 67, 39, 68, 79, 64, 57],
                  backgroundColor: '#1D2343',
                  borderColor: '#1D2343',
                  tension: 0.5,
                },
    ]
  },
  sorting: {
      labels: [
      'Glass',
      'Plastic',    
      'Paper'
    ],
    datasets: [{
      label: 'Sorting',
      data: [25, 15, 60],
      backgroundColor: [ 
        '#65BDC0',
        '#1D2343',
        '#EE777F'
      ],   
    }]
  },
  options: {
    optionsLine:  {
      responsive: true,
      aspectRatio: 3,
      plugins: {
        legend: {
          display: false
        }
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 14,
          bottom: 14
        }
      }
    },
    optionsDoughnut: {
      borderWidth: 0,
      cutout: 25,
      hover: false,
      legend: false,
      responsive: false,
      borderAlign: 'inner',
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            color: 'rgba(29, 35, 67, 0.75)',
            font: {
              size: 17
            }
          },
        }
      }
    }
  }
}

const statisticsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ELEC_DATA: 
      return {
        ...state,
        electricity: {
          ...state.electricity, 
          datasets: state.electricity.datasets.map(item => {
            return {
              ...item,
              data: [...action.data.slice(0, 12)]
            }
          })
        }
      }
    case SET_WATER_DATA: 
      return {
        ...state,
        water: {
          ...state.water, 
          datasets: state.water.datasets.map(item => {
            return {
              ...item,
              data: [...action.data.slice(12, 24)]
            }
          })
        }
      }
    default:
      return state
  }
}

export const setElecDataAC = (data) => ({type:SET_ELEC_DATA, data})
export const setWaterDataAC = (data) => ({type:SET_WATER_DATA, data})

export default statisticsReducer