import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  FridgeIcon,
  KettleIcon,
  PcIcon,
  StoveIcon,
  TvIcon,
  WasherIcon,
} from '../../components/SvgIcons';
import { useDispatch } from 'react-redux';
import { fetchStatistics } from '../../store/reducers/statisticsSlice';
import Title from '../../components/common/Title';
import Subtitle from '../../components/common/Subtitle';
import Layout from '../../components/Layout';

import styles from './Statistics.module.scss';

const Statistics = () => {
  const options = {
    optionsLine: {
      responsive: true,
      aspectRatio: 3,
      plugins: {
        legend: {
          display: false,
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 14,
          bottom: 14,
        },
      },
    },
    optionsDoughnut: {
      borderWidth: 0,
      cutout: 25,
      hover: false,
      legend: false,
      responsive: false,
      borderAlign: 'inner',
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            color: 'rgba(29, 35, 67, 0.75)',
            font: {
              size: 17,
            },
          },
        },
      },
    },
  };

  const { electricity, water, waste, sorting } = useSelector(
    (state) => ({
      electricity: state.statistics.electricity,
      water: state.statistics.water,
      waste: state.statistics.waste,
      sorting: state.statistics.sorting,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchStatistics());
  }, []);

  return (
    <Layout>
      <Title classNames={styles.title}>Statistics</Title>
      <div className={styles.statistics}>
        <div className={styles.statistics__item}>
          <Subtitle classNames={styles.subtitle}>Electricity</Subtitle>
          <div className={styles.blockWrapper}>
            <Line data={electricity} options={options.optionsLine} id="electricity" />
          </div>
        </div>
        <div className={styles.statistics__item}>
          <Subtitle classNames={styles.subtitle}>Water</Subtitle>
          <div className={styles.blockWrapper}>
            <Line data={water} options={options.optionsLine} id="water" />
          </div>
        </div>
        <div className={styles.statistics__item}>
          <Subtitle classNames={styles.subtitle}>Water Management</Subtitle>
          <div className={styles.blockWrapper}>
            <Line data={waste} options={options.optionsLine} id="waste" />
          </div>
        </div>
        <div className={styles.statistics__item}>
          <Subtitle classNames={styles.subtitle}>Sorting</Subtitle>
          <div className={styles.blockWrapper}>
            <div className={styles.sortingDate}>
              {`${water.labels[new Date().getMonth() + 1]}, ${new Date().getUTCFullYear()}`}
            </div>
            <Doughnut
              data={sorting}
              id="sort"
              options={options.optionsDoughnut}
              style={{ margin: '0 auto' }}
            />
          </div>
        </div>
        <div className={styles.statistics__item}>
          <Subtitle classNames={styles.subtitle}>Devices</Subtitle>
          {/* Сделать списком и проитерировать */}
          <div className={styles.devices}>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--dark-blue`}>
                <TvIcon />
              </div>
              <span>TV</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--red`}>
                <KettleIcon />
              </div>
              <span>Kettle</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--blue`}>
                <WasherIcon />
              </div>
              <span>Washer</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--red`}>
                <FridgeIcon />
              </div>
              <span>Fridge</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--blue`}>
                <StoveIcon />
              </div>
              <span>Stove</span>
            </div>
            <div className={styles.devices__item}>
              <div className={`${styles.devices__icon} block--dark-blue`}>
                <PcIcon />
              </div>
              <span>PC</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
