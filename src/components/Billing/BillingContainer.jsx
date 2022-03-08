import React from 'react'
import Billing from './Billing'
import { connect } from 'react-redux'
import { payBill, totalBill, createCurrentInvoice, getHistoryBillingData, getChartBillingData, updateHistoryBilling } from '../../redux/billing-reducer'

class BillingContainer extends React.Component {
  componentDidMount() {
    this.props.getHistoryBillingData()
    this.props.getChartBillingData()
  }

  render() {
    return <Billing {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.billing.history,
    tax: state.billing.tax,
    invoicingChart: state.billing.invoicingChart,
    options: state.billing.options,
    isFetching: state.billing.isFetching
  }
}

export default connect(mapStateToProps, 
  {
    payBill, 
    totalBill, 
    createCurrentInvoice, 
    getHistoryBillingData,
    getChartBillingData,
    updateHistoryBilling
  })
  (BillingContainer)