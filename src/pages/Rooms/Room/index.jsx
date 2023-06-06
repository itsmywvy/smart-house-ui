import React from 'react';
import Device from '../../../components/Device';
import styles from './Room.module.scss';
import {
  FridgeIcon,
  ThermometherIcon,
  DropIcon,
  LightIcon,
  KettleIcon,
  IndoorGrillIcon,
  MicrowaveIcon,
  TvIcon,
  MulticookerIcon,
  DishwasherIcon,
  StoveIcon,
} from '../../../components/SvgIcons';
import Thermomether from '../../../components/Thermomether';
import propTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { convertToFahrenheit, fetchRooms } from '../../../store/reducers/roomsSlice';
import { useParams } from 'react-router-dom';
import Title from '../../../components/common/Title';
import Subtitle from '../../../components/common/Subtitle';
import Preloader from '../../../components/common/Preloader';

const Room = () => {
  const { roomName } = useParams();

  const dispatch = useDispatch();
  const temperatureF = useSelector((state) => state.rooms.temperatureF);
  const rooms = useSelector((state) => state.rooms.data);

  const room = rooms.find((item) => item.name === roomName);

  React.useEffect(() => {
    dispatch(convertToFahrenheit(room?.temperature));
  }, [room]);

  if (!room) {
    return <Preloader />;
  }

  return (
    <>
      <Title classNames={styles.title}>{roomName}</Title>
      <div className={styles.climate}>
        <div className={styles.climate__item}>
          <div className={styles.info}>
            <div className={styles.info__text}>Room’s Temperature</div>
            <span className={styles.info__numbers}>
              +{room.temperature} <span>°C</span>
            </span>
            <span className={styles.info__numbers}>
              {temperatureF} <span>°F</span>
            </span>
          </div>
          <Thermomether
            icon={<ThermometherIcon />}
            bgColor="#FFE5E5"
            value={room.temperature}
            scaleColor="var(--red)"
          />
        </div>

        <div className={styles.climate__item}>
          <div className={styles.info}>
            <span className={styles.info__text}>Room’s Humidity</span>
            <span className={styles.info__numbers}>{room.humidity}%</span>
          </div>
          <Thermomether
            icon={<DropIcon />}
            bgColor="#A5C0DD"
            value={room.humidity}
            scaleColor="var(--blue)"
          />
        </div>

        <div className={styles.climate__item}>
          <div className={styles.info}>
            <span className={styles.info__text}>Room’s Lightning</span>
            <span className={styles.info__numbers}>{room.lightning}%</span>
          </div>
          <Thermomether
            icon={<LightIcon />}
            bgColor="#C5CAE3"
            value={room.lightning}
            scaleColor="var(--dark-blue)"
          />
        </div>
      </div>
      <div className={`${styles.contentDevice} ${styles.device}`}>
        <Subtitle classNames={styles.subtitle}>Devices</Subtitle>
        <div className={styles.deviceWrapper}>
          <Device deviceName="Fridge" deviceIcon={<FridgeIcon />} />
          <Device deviceName="Kettle" deviceIcon={<KettleIcon />} />
          <Device deviceName="Stove" deviceIcon={<StoveIcon />} />
          <Device deviceName="Dishwasher" deviceIcon={<DishwasherIcon />} />
          <Device deviceName="Multicooker" deviceIcon={<MulticookerIcon />} />
          <Device deviceName="TV" deviceIcon={<TvIcon />} />
          <Device deviceName="Microwave" deviceIcon={<MicrowaveIcon />} />
          <Device deviceName="Indoor Grill" deviceIcon={<IndoorGrillIcon />} />
        </div>
      </div>
    </>
  );
};

export default Room;
