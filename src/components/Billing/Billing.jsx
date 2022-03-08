import React from 'react'
import { Line } from 'react-chartjs-2'
import styles from './Billing.module.css'
import CurrentInvoice from './CurrentInvoice/CurrentInvoice'
import Preloader from '../common/Preloader/Preloader'

const Billing = (props) => {
  const tableElems = props.history.map((elem,i) => {
  const isPaid = elem.status  ? <td style={{background: 'rgba(101, 189, 192, 0.51'}}>Paid</td> :  <td style={{background: 'rgba(238, 119, 127, 0.46'}}>Unpaid</td>
    return (
    <tr key={`${elem}${i}`}>
      <td>{elem.number}</td>
      <td>{elem.category}</td>
      <td>{elem.month}</td>
      <td>{elem.dueData}</td>
      <td>{elem.amountDue}</td>
      {isPaid}
    </tr>
    )
  })

  return (
    <div className={styles.billing}>
        <div className="billing-content">
          <h1 className={`${styles.title} content-title`}>Utility Billing</h1>
          <div className={styles.grid}>
            <div className={styles.gridItem__history}>
              <h2 className={`${styles.subtitle} content-subtitle`}>Invoice History</h2>
              <div className={styles.tableWrapper}>
                {
                  props.isFetching ? <Preloader/> : <table className={styles.table}>
                    <thead className={styles.tableHead}>
                      <tr>
                        <td>Number</td>
                        <td>Category</td>
                        <td>Month</td>
                        <td>Due Date</td>
                        <td>Amount Due</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                    {tableElems}
                    </tbody>
                  </table>
                }
              </div>
            </div>
             <CurrentInvoice invoicingData={props.history}/>
            <div className={styles.gridItem__chart}>
              <h2 className={`${styles.subtitle} content-subtitle`}>Invoicing Chart</h2>
              {
                props.invoicingChart.datasets.length > 0 && <Line width={938} height={238} id="currentInvoice" data={props.invoicingChart} options={props.options.optionsLine}/>
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default Billing