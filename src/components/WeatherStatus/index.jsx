import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getWeatherInfo } from '../../store/reducers/homeSlice';

import styles from './WeatherStatus.module.scss';

const WeatherStatus = ({ temperature }) => {
  const dispatch = useDispatch();

  const outdoorTemperature = useSelector((state) => state.home.outdoorTemperature, shallowEqual);
  const conditionIcon = useSelector((state) => state.home.conditionIcon, shallowEqual);

  React.useEffect(() => {
    dispatch(getWeatherInfo());
  }, []);

  return (
    <div className={styles.temp}>
      <span>+{outdoorTemperature}°C</span>
      <img src={conditionIcon} />
    </div>
  );
};

export default WeatherStatus;
