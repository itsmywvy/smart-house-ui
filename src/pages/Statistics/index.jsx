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
import Box from '../../components/common/Box';

const devices = [
  {
    name: 'TV',
    icon: <TvIcon />,
  },
  {
    name: 'Kettle',
    icon: <KettleIcon />,
  },
  {
    name: 'Washer',
    icon: <WasherIcon />,
  },
  {
    name: 'Fridge',
    icon: <FridgeIcon />,
  },
  {
    name: 'Stove',
    icon: <StoveIcon />,
  },
  {
    name: 'PC',
    icon: <PcIcon />,
  },
];

const Statistics = () => {
  const options = {
    optionsLine: {
      responsive: true,
      maintainAspectRatio: false,
      // aspectRatio: 3,
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
      responsive: true,
      maintainAspectRatio: false,
      borderAlign: 'inner',
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          position: 'bottom',
          align: 'start',
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
        <div className={styles.statistics__electricity}>
          <Subtitle classNames={styles.subtitle}>Electricity</Subtitle>
          <Box>
            <div className={styles.blockWrapper}>
              <Line data={electricity} options={options.optionsLine} id="electricity" />
            </div>
          </Box>
        </div>
        <div className={styles.statistics__water}>
          <Subtitle classNames={styles.subtitle}>Water</Subtitle>
          <Box>
            <div className={styles.blockWrapper}>
              <Line data={water} options={options.optionsLine} id="water" />
            </div>
          </Box>
        </div>
        <div className={styles.statistics__waste}>
          <Subtitle classNames={styles.subtitle}>Waste Management</Subtitle>
          <Box>
            <div className={styles.blockWrapper}>
              <Line data={waste} options={options.optionsLine} id="waste" />
            </div>
          </Box>
        </div>
        <div className={styles.statistics__sorting}>
          <Subtitle classNames={styles.subtitle}>Sorting</Subtitle>

          <Box>
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
          </Box>
        </div>
        <div className={styles.statistics__devices}>
          <Subtitle classNames={styles.subtitle}>Devices</Subtitle>
          <Box>
            <ul className={styles.devices}>
              {devices.map((device, i) => (
                <li className={styles.devices__item} key={i}>
                  <div className={styles.devices__icon}>{device.icon}</div>
                  <span>{device.name}</span>
                </li>
              ))}
            </ul>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
