import React from 'react'
import { Line } from 'react-chartjs-2'
import styles from './Billing.module.css'

const Billing = () => {
  const data = [
    {
      number: '00241',
      category: 'Waste',
      month: 'February',
      dueData: '03/12/2020',
      amountDue: 13.98,
      status: 'paid'
    },
    {
      number: '00242',
      category: 'Water',
      month: 'February',
      dueData: '03/15/2020',
      amountDue: 53.78,
      status: 'paid'
    },
    {
      number: '00243',
      category: 'Electricity',
      month: 'March',
      dueData: '04/06/2020',
      amountDue: 86.98,
      status: 'paid'
    },
    {
      number: '00244',
      category: 'Waste',
      month: 'March',
      dueData: '04/12/2020',
      amountDue: 14.92,
      status: 'unpaid'
    },{
      number: '00245',
      category: 'Water',
      month: 'March',
      dueData: '04/15/2020',
      amountDue: 56.78,
      status: 'unpaid'
    },
    {
      number: '00245',
      category: 'Water',
      month: 'March',
      dueData: '04/15/2020',
      amountDue: 56.78,
      status: 'unpaid'
    },
    {
      number: '00245',
      category: 'Water',
      month: 'March',
      dueData: '04/15/2020',
      amountDue: 56.78,
      status: 'unpaid'
    },
    {
      number: '00245',
      category: 'Water',
      month: 'March',
      dueData: '04/15/2020',
      amountDue: 56.78,
      status: 'unpaid'
    },
  ]

  const tableElems = data.reverse().map(elem => {
    return (
    <tr>
      <td>{elem.number}</td>
      <td>{elem.category}</td>
      <td>{elem.month}</td>
      <td>{elem.dueData}</td>
      <td>{elem.amountDue}</td>
      <td>{elem.status}</td>
    </tr>
    )
  })
  const invoicingChartData = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
                {
                  data: [40, 39, 25, 47, 23, 37, 56, 35, 30, 40, 38, 45],
                  backgroundColor: '#EE777F',
                  borderColor: '#ee777f',
                  tension: 0.5,
                  label: 'Waste'
                },
                {
                  data: [80, 50, 50, 70, 52, 57, 65, 48, 48, 79, 43, 80],
                  backgroundColor: '#1D2343',
                  borderColor: '#1D2343',
                  tension: 0.5,
                  label: 'Water'
                },
                {
                  data: [38, 70, 62, 75, 64, 65, 76, 78, 61, 56, 63, 62],
                  backgroundColor: '#65bdc0',
                  borderColor: '#65bdc0',
                  tension: 0.5,
                  label: 'Electricity'
                },
    ]
  }

  const options =  {
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

  return (
    <div className={styles.billing}>
        <div className="billing-content">
          <h1 className={`${styles.title} content-title`}>Utility Billing</h1>
          <div className={styles.grid}>
            <div className={styles.gridItem__history}>
              <h2 className={`${styles.subtitle} content-subtitle`}>Invoice History</h2>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
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
              </div>
            </div>
            <div className={styles.gridItem__current}>
              <h2 className={`${styles.subtitle} content-subtitle`}>Current Invoice</h2>
              <div className={styles.currentInvoice}>
                <div className={styles.currentInvoice__head}>
                  <div className={styles.currentInvoice__item}>
                    <span className={styles.currentInvoice_itemName}>Number</span>
                    <span className={styles.currentInvoice__itemData}>000244</span>
                  </div>
                  <div className={styles.currentInvoice__item}>
                    <span className={styles.currentInvoice__itemName}>Due Date</span>
                    <span className={styles.currentInvoice__itemData}>04/12/2020</span>
                  </div>
                  <div className={styles.currentInvoice__item}>
                    <span className={styles.currentInvoice__itemName}>Amount Due</span>
                    <span className={styles.currentInvoice__itemData}>$14.22</span>
                  </div>
                </div>
                <div className={styles.currentInvoice__body}>
                  <div className={styles.currentInvoice__item}>
                    <span className={styles.currentInvoice__itemName}>Tax</span>
                    <span className={styles.currentInvoice__itemData}>$1.849</span>
                  </div>
                  <div className={styles.currentInvoice__item}>
                    <span className={styles.currentInvoice__itemName}>Total</span>
                    <span className={styles.currentInvoice__itemData}>$16.07</span>
                  </div>
                  <button className={`${styles.btnPay} btn`}>Pay</button>
                </div>
              </div>
            </div>
            <div className={styles.gridItem__chart}>
              <h2 className={`${styles.subtitle} content-subtitle`}>Invoicing Chart</h2>
              <Line width={938} height={238} id="currentInvoice" data={invoicingChartData} options={options}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Billing