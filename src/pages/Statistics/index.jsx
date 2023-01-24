import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  FridgeIcon,
  KettleIcon,
  PcIcon,
  StoveIcon,
  TvIcon,
  WasherIcon,
} from '../../components/SvgIcons';

import styles from './Statistics.module.css';

const Statistics = (props) => {
  return (
    <div className={styles.grid}>
      <div className={`${styles.gridItem} ${styles.gridItem__elec}`}>
        <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Electricity</h2>
        <div className={styles.blockWrapper}>
          {/* <Line data={props.electricity} options={props.options.optionsLine} id="electricity" /> */}
        </div>
      </div>
      <div className={`${styles.gridItem} ${styles.gridItem__water}`}>
        <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Water</h2>
        <div className={styles.blockWrapper}>
          {/* <Line data={props.water} options={props.options.optionsLine} id="water" /> */}
        </div>
      </div>
      <div className={`${styles.gridItem} ${styles.gridItem__waste}`}>
        <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Waste Management</h2>
        <div className={styles.blockWrapper}>
          {/* <Line data={props.waste} options={props.options.optionsLine} id="waste" /> */}
        </div>
      </div>
      <div className={`${styles.gridItem} ${styles.gridItem__sorting}`}>
        <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Sorting</h2>
        <div className={styles.blockWrapper}>
          <div className={styles.sortingDate}>
            {/* {`${props.water.labels[new Date().getMonth() + 1]}, ${new Date().getUTCFullYear()}`} */}
          </div>
          {/* <Doughnut data={props.sorting} id="sort" options={props.options.optionsDoughnut} /> */}
        </div>
      </div>
      <div className={`${styles.gridItem} ${styles.gridItem__devices}`}>
        <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Devices</h2>
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
  );
};

export default Statistics;
