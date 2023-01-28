import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Billing.module.scss';
import CurrentInvoice from '../../components/CurrentInvoice';
import Preloader from '../../components/common/Preloader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchChartData, fetchHistoryData } from '../../features/billingSlice';

const Billing = (props) => {
  const options = {
    optionsLine: {
      responsive: false,
      plugins: {
        legend: {
          align: 'end',
          labels: {
            usePointStyle: true,
            font: {
              size: 19,
              family: 'Lack Regular',
            },
            padding: 30,
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
        padding: {
          left: 20,
          right: 20,
          top: 18,
          bottom: 18,
        },
      },
    },
  };
  const dispatch = useDispatch();
  const history = useSelector((state) => state.billing.history);
  const invoicingChart = useSelector((state) => state.billing.invoicingChart);

  React.useEffect(() => {
    dispatch(fetchHistoryData());
    dispatch(fetchChartData());
  }, []);

  const tableElems = history.map((elem, i) => {
    const isPaid = elem.status ? (
      <td style={{ background: 'rgba(101, 189, 192, 0.51' }}>Paid</td>
    ) : (
      <td style={{ background: 'rgba(238, 119, 127, 0.46' }}>Unpaid</td>
    );
    return (
      <tr key={`${elem}${i}`}>
        <td>{elem.number}</td>
        <td>{elem.category}</td>
        <td>{elem.month}</td>
        <td>{elem.dueData}</td>
        <td>{elem.amountDue}</td>
        {isPaid}
      </tr>
    );
  });

  return (
    <div className={styles.billing}>
      <div className="billing-content">
        <h1 className={`${styles.title} content-title`}>Utility Billing</h1>
        <div className={styles.grid}>
          <div className={styles.gridItem__history}>
            <h2 className={`${styles.subtitle} content-subtitle`}>Invoice History</h2>
            <div className={styles.tableWrapper}>
              {props.isFetching ? (
                <Preloader />
              ) : (
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
                  <tbody className={styles.tableBody}>{tableElems}</tbody>
                </table>
              )}
            </div>
          </div>
          <CurrentInvoice invoicingData={history} />
          <div className={styles.gridItem__chart}>
            <h2 className={`${styles.subtitle} content-subtitle`}>Invoicing Chart</h2>
            {invoicingChart.datasets.length > 0 && (
              <Line
                width={938}
                height={238}
                id="currentInvoice"
                data={invoicingChart}
                options={options.optionsLine}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
