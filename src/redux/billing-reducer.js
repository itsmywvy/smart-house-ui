import { billingAPI } from "../api/api"

const PAY_BILL = 'PAY_BILL'
const TOTAL_BILL = 'TOTAL_BILL'
const CREATE_CURRENT_INVOICE = 'CREATE_CURRENT_INVOICE'
const GET_HISTORY_DATA = 'GET_HISTORY_DATA'
const GET_CHART_DATA = 'GET_CHART_DATA'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

const initialState = {
  history: [],
  invoicingChart: {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
                {
                  data: [],
                  backgroundColor: '#EE777F',
                  borderColor: '#ee777f',
                  tension: 0.5,
                  label: ''
                },
                {
                  data: [],
                  backgroundColor: '#1D2343',
                  borderColor: '#1D2343',
                  tension: 0.5,
                  label: ''
                },
                {
                  data: [],
                  backgroundColor: '#65bdc0',
                  borderColor: '#65bdc0',
                  tension: 0.5,
                  label: ''
                },
    ]
  },
  options: {
    optionsLine: {
      responsive: false,
      plugins: {
        legend: {
          align: 'end',
          labels: {
            usePointStyle: true,
            font: {
              size: 19,
              family: 'Lack Regular'
            },
            padding: 30
          }
        }
      },
      elements: {
        line: {
          fill: true
        },
        point: {
          radius: 0
        }
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 18,
          bottom: 18
        }
      }
    }
  },
  tax: 1.849,
  total: null,
  isFetching: false
}

const billingReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_HISTORY_DATA: 
      return {
        ...state,
        history: [...action.payload] 
      }
    case GET_CHART_DATA:
    debugger
      return {
        ...state,
        invoicingChart: {
          ...state.invoicingChart,
          datasets: state.invoicingChart.datasets.map(item => {
            action.payload.map(obj => {
              return {
                ...item,
                data: [...obj.data],
                label: obj.label
              }
            })
          })
        }
      }
    case TOGGLE_FETCHING: 
      return {
        ...state,
        isFetching: action.isFetching
      }
    default: 
      return state
  }
}

// Action's Creators
export const payBill = (id) => ({type: PAY_BILL, id})
export const totalBill = () => ({type: TOTAL_BILL})
export const createCurrentInvoice = () => ({type: CREATE_CURRENT_INVOICE})
export const getHistoryData = (payload) => ({type: GET_HISTORY_DATA, payload})
export const getChartData = (payload) => ({type: GET_CHART_DATA, payload})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

//Redux Thunk
export const getHistoryBillingData = () => (dispatch) => {
  dispatch(toggleFetching(true))
  billingAPI.getHistoryData().then(res => {
    dispatch(getHistoryData(res))
    dispatch(toggleFetching(false))
  })
}

export const getChartBillingData = () => (dispatch) => {
  billingAPI.getChartData().then(res => {
    dispatch(getChartData(res))
  })
}

export const updateHistoryBilling = (id) => (dispatch) => {
  billingAPI.payBill().then(res => {
    dispatch(payBill(id))
  })
}

export default billingReducer