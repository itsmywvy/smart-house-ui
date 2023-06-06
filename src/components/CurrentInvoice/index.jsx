import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  deleteCurrentInvoice,
  getTotalBill,
  usePayInvoiceMutation,
} from '../../store/reducers/billingSlice';
import Preloader from '../common/Preloader';
import Subtitle from '../common/Subtitle';
import Button from '../common/Button';

import styles from './CurrentInvoice.module.scss';

const CurrentInvoice = React.memo(({ invoicingData, isLoading }) => {
  const dispatch = useDispatch();
  const { tax, total } = useSelector(
    (state) => ({
      tax: state.billing.tax,
      total: state.billing.total,
    }),
    shallowEqual,
  );

  const currentItem = [...invoicingData]
    .sort((a, b) => a.number.localeCompare(b.number))
    .find((item) => !item.status);

  const [payInvoice, mutateFlags] = usePayInvoiceMutation();

  React.useEffect(() => {
    dispatch(getTotalBill(currentItem?.amountDue));
  }, [isLoading]);

  const onClickPay = async (id) => {
    await payInvoice(id);
    dispatch(deleteCurrentInvoice(currentItem.number));
  };

  React.useEffect(() => {
    setTimeout(function () {
      mutateFlags.reset();
    }, 2000);
  }, [mutateFlags.isSuccess]);

  const currentInvoice = currentItem ? (
    <div className={styles.currentInvoice}>
      {mutateFlags.isSuccess ? (
        <Preloader />
      ) : (
        <div>
          <div className={styles.currentInvoice__top}>
            <div className={styles.currentInvoice__item}>
              <span className={styles.currentInvoice_itemName}>Number</span>
              <span className={styles.currentInvoice__itemData}>{currentItem?.number}</span>
            </div>
            <div className={styles.currentInvoice__item}>
              <span className={styles.currentInvoice__itemName}>Due Date</span>
              <span className={styles.currentInvoice__itemData}>{currentItem?.dueData}</span>
            </div>
            <div className={styles.currentInvoice__item}>
              <span className={styles.currentInvoice__itemName}>Amount Due</span>
              <span className={styles.currentInvoice__itemData}>${currentItem?.amountDue}</span>
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
          </div>
        </div>
      )}
      <Button flags={mutateFlags} onClickHandle={() => onClickPay(currentItem.id)}>
        Pay
      </Button>
    </div>
  ) : (
    <p>No current invoices</p>
  );

  return (
    <div>
      <h2 className={`${styles.subtitle} content-subtitle`}></h2>
      <Subtitle classNames={styles.subtitle}>Current Invoice</Subtitle>
      {isLoading ? <Preloader /> : currentInvoice}
    </div>
  );
});

export default CurrentInvoice;
