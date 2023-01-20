import React from 'react'
import styles from './CurrentInvoice.module.css'

const CurrentInvoice = (props) => {
  return (
    <div>
      <div className={styles.gridItem__current}>
        <h2 className={`${styles.subtitle} content-subtitle`}>Current Invoice</h2>
        <div className={styles.currentInvoice}>
          <div className={styles.currentInvoice__head}>
            <div className={styles.currentInvoice__item}>
              <span className={styles.currentInvoice_itemName}>Number</span>
              <span className={styles.currentInvoice__itemData}>{props.invoicingData.number}</span>
            </div>
            <div className={styles.currentInvoice__item}>
              <span className={styles.currentInvoice__itemName}>Due Date</span>
              <span className={styles.currentInvoice__itemData}>{props.invoicingData.dueData}</span>
            </div>
            <div className={styles.currentInvoice__item}>
              <span className={styles.currentInvoice__itemName}>Amount Due</span>
              <span className={styles.currentInvoice__itemData}>{'$' + props.invoicingData.amountDue}</span>
            </div>
          </div>
          <div className={styles.currentInvoice__body}>
            <div className={styles.currentInvoice__item}>
              <span className={styles.currentInvoice__itemName}>Tax</span>
              <span className={styles.currentInvoice__itemData}>{'$' + props.tax}</span>
            </div>
            <div className={styles.currentInvoice__item}>
              <span className={styles.currentInvoice__itemName}>Total</span>
              <span className={styles.currentInvoice__itemData}>{props.totalBill}</span>
            </div>
            <button className={`${styles.btnPay} btn`} onClick={props.payBill}>Pay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentInvoice
