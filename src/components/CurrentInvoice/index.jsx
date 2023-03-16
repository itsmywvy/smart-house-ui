import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTotalBill, updatePayStatus } from '../../features/billingSlice';
import Preloader from '../common/Preloader';
import styles from './CurrentInvoice.module.scss';

import { ReactComponent as CheckmarkIcon } from '../../assets/images/checkmark.svg';
import Subtitle from '../common/Subtitle';

const CurrentInvoice = ({ invoicingData = {} }) => {
  const { tax, total, payStatus, isFetching } = useSelector((state) => state.billing);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTotalBill(invoicingData.amountDue));
  }, [isFetching.historyData]);

  const onClickPay = (id) => {
    dispatch(updatePayStatus(id));
  };

  const currentInvoice = invoicingData ? (
    <div className={styles.currentInvoice}>
      <div className={styles.currentInvoice__head}>
        <div className={styles.currentInvoice__item}>
          <span className={styles.currentInvoice_itemName}>Number</span>
          <span className={styles.currentInvoice__itemData}>{invoicingData.number}</span>
        </div>
        <div className={styles.currentInvoice__item}>
          <span className={styles.currentInvoice__itemName}>Due Date</span>
          <span className={styles.currentInvoice__itemData}>{invoicingData.dueData}</span>
        </div>
        <div className={styles.currentInvoice__item}>
          <span className={styles.currentInvoice__itemName}>Amount Due</span>
          <span className={styles.currentInvoice__itemData}>${invoicingData.amountDue}</span>
        </div>
      </div>
      <div className={styles.currentInvoice__body}>
        <div className={styles.currentInvoice__item}>
          <span className={styles.currentInvoice__itemName}>Tax</span>
          <span className={styles.currentInvoice__itemData}>${tax}</span>
        </div>
        <div className={styles.currentInvoice__item}>
          <span className={styles.currentInvoice__itemName}>Total</span>
          <span className={styles.currentInvoice__itemData}>${total}</span>
        </div>
        <button
          disabled={payStatus === 'loading'}
          className={`${styles.btnPay} btn ${payStatus === 'success' ? styles.success : ''}`}
          onClick={() => onClickPay(invoicingData.id)}>
          {payStatus === 'loading' && <Preloader />}
          {payStatus === 'success' ? <CheckmarkIcon /> : <span>Pay</span>}
          {payStatus === 'error' && <span>Something went wrong</span>}
        </button>
      </div>
    </div>
  ) : (
    <p>No current invoices</p>
  );

  return (
    <div>
      <h2 className={`${styles.subtitle} content-subtitle`}></h2>
      <Subtitle classNames={styles.subtitle}>Current Invoice</Subtitle>
      {isFetching.historyData ? <Preloader /> : currentInvoice}
    </div>
  );
};

export default CurrentInvoice;
