import React from 'react';
import { Line } from 'react-chartjs-2';
import CurrentInvoice from '../../components/CurrentInvoice';
import Preloader from '../../components/common/Preloader';
import { shallowEqual, useSelector } from 'react-redux';
import {
  fetchChartData,
  toggleLegendName,
  useGetHistoryDataQuery,
} from '../../store/reducers/billingSlice';
import Title from '../../components/common/Title';
import Subtitle from '../../components/common/Subtitle';
import Table from '../../components/Table';
import Box from '../../components/common/Box';
import LegendLineList from '../../components/LegendLineList';
import Layout from '../../components/Layout';
import { useAppDispatch } from '../../hooks/redux';

import styles from './Billing.module.scss';

const Billing = () => {
  const dispatch = useAppDispatch();
  const { invoicingChart, isFetching, payStatus, currentInvoice, history } = useSelector(
    (state) => ({
      invoicingChart: state.billing.invoicingChart,
      isFetching: state.billing.isFetching,
      payStatus: state.billing.payStatus,
      currentInvoice: state.billing.currentInvoice,
    }),
    shallowEqual,
  );

  const lineRef = React.useRef();

  const {
    data: historyData = [],
    isLoading: isLoadingHistory,
    error: errorHistory,
  } = useGetHistoryDataQuery();

  React.useEffect(() => {
    dispatch(fetchChartData());
  }, []);

  const handleToggleLegend = (index) => {
    const visibilityData = lineRef.current.isDatasetVisible(index);
    if (visibilityData) {
      lineRef.current.hide(index);
      dispatch(toggleLegendName(index));
    } else {
      lineRef.current.show(index);
      dispatch(toggleLegendName(index));
    }
  };

  const options = {
    optionsLine: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
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

  return (
    <Layout>
      <div className={styles.billing}>
        <Title classNames={styles.title}>Utility Billing</Title>
        <div className={styles.billingContent}>
          <div className={styles.billingContentItem__history}>
            <Subtitle classNames={styles.subtitle}>Invoice History</Subtitle>
            <div className={styles.tableWrapper}>
              {isLoadingHistory ? <Preloader /> : <Table data={historyData} />}
            </div>
          </div>
          <div className={styles.billingContentItem__current}>
            <CurrentInvoice isLoading={isLoadingHistory} invoicingData={historyData} />
          </div>
          <div className={styles.billingContentItem__chart}>
            <div className={styles['billingContentItem__chart-header']}>
              <Subtitle classNames={styles.subtitle}>Invoicing Chart</Subtitle>
              <LegendLineList list={invoicingChart} handleToggle={handleToggleLegend} />
            </div>
            {isFetching.chartData ? (
              <Preloader />
            ) : (
              <Box>
                <div style={{ position: 'relative', height: '30vh' }}>
                  <Line
                    ref={lineRef}
                    id="currentInvoice"
                    data={invoicingChart}
                    options={options.optionsLine}
                  />
                </div>
              </Box>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Billing;
