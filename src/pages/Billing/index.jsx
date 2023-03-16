import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Billing.module.scss';
import CurrentInvoice from '../../components/CurrentInvoice';
import Preloader from '../../components/common/Preloader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchChartData, fetchHistoryData, getCurrentInvoice } from '../../features/billingSlice';
import Title from '../../components/common/Title';
import Subtitle from '../../components/common/Subtitle';
import Table from '../../components/Table';

const Billing = () => {
  const options = {
    optionsLine: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          align: 'end',
          labels: {
            usePointStyle: true,
            font: {
              size: window.innerWidth > 530 ? 20 : 12,
              family: 'Lack Regular',
            },
            padding: window.innerWidth > 530 ? 30 : 8,
          },
        },
      },
      elements: {
        line: {
          fill: true,
        },
        point: {
          radius: 0,
        },
      },
      layout: {
        padding: window.innerWidth > 350 ? 20 : 10,
      },
    },
  };
  const dispatch = useDispatch();
  const { history, invoicingChart, isFetching, payStatus, currentInvoice } = useSelector(
    (state) => state.billing,
  );

  React.useEffect(() => {
    dispatch(fetchHistoryData());
    dispatch(fetchChartData());
    dispatch(getCurrentInvoice(history));
  }, []);

  return (
    <div className={styles.billing}>
      <Title classNames={styles.title}>Utility Billing</Title>
      <div className={styles.billingContent}>
        <div className={styles.billingContentItem__history}>
          <Subtitle classNames={styles.subtitle}>Invoice History</Subtitle>
          <div className={styles.tableWrapper}>
            {isFetching.chartData ? <Preloader /> : <Table data={history} />}
          </div>
        </div>
        <div className={styles.billingContentItem__current}>
          <CurrentInvoice invoicingData={currentInvoice.length && currentInvoice[0]} />
        </div>
        <div className={styles.billingContentItem__chart}>
          <Subtitle classNames={styles.subtitle}>Invoicing Chart</Subtitle>
          {isFetching.chartData ? (
            <Preloader />
          ) : (
            <div style={{ position: 'relative', height: '40vh' }}>
              <Line id="currentInvoice" data={invoicingChart} options={options.optionsLine} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Billing;
