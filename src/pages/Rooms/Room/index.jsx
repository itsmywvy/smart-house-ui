import React from 'react';
import Device from '../../../components/Device/Device';
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
import Thermomether from '../../../components/Thermomether/Thermomether';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { convertToFahrenheit } from '../../../features/rooms/roomsSlice';
import { useParams } from 'react-router-dom';

const Room = () => {
  const dispatch = useDispatch();
  const [currentRoom, setCurrentRoom] = React.useState({});
  const params = useParams();

  const temperatureF = useSelector((state) => state.rooms.temperatureF);
  const rooms = useSelector((state) => state.rooms.data);

  React.useEffect(() => {
    rooms.find((room) => {
      if (room?.name === params.roomName) {
        setCurrentRoom(room);
      }
    });
    console.log(params.roomName);

    dispatch(convertToFahrenheit(currentRoom.temperature));
  }, [rooms, params.roomName]);

  return (
    <div>
      <h1 className={`${styles.title} content-title`}>{params.roomName}</h1>
      <div className={styles.climate}>
        <div className={styles.climate__item}>
          <div className={styles.info}>
            <div className={styles.info__text}>Room’s Temperature</div>
            <span className={styles.info__numbers}>
              +{currentRoom.temperature} <span>&#176;C</span>{' '}
            </span>
            <span className={styles.info__numbers}>
              {temperatureF} <span>&#176;F</span>
            </span>
          </div>
          <Thermomether
            icon={<ThermometherIcon />}
            bgColor="#FFE5E5"
            value={currentRoom.temperature}
            scaleColor="var(--red)"
          />
        </div>

        <div className={styles.climate__item}>
          <div className={styles.info}>
            <span className={styles.info__text}>Room’s Humidity</span>
            <span className={styles.info__numbers}>{currentRoom.humidity}%</span>
          </div>
          <Thermomether
            icon={<DropIcon />}
            bgColor="#CAEEEF"
            value={currentRoom.humidity}
            scaleColor="var(--blue)"
          />
        </div>

        <div className={styles.climate__item}>
          <div className={styles.info}>
            <span className={styles.info__text}>Room’s Lightning</span>
            <span className={styles.info__numbers}>{currentRoom.lightning}%</span>
          </div>
          <Thermomether
            icon={<LightIcon />}
            bgColor="#C5CAE3"
            value={currentRoom.lightning}
            scaleColor="var(--dark-blue)"
          />
        </div>
      </div>
      <div className={`${styles.contentDevice} ${styles.device}`}>
        <h2 className={`content-subtitle ${styles.subtitle}`}>Devices</h2>
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
    </div>
  );
};

Room.propTypes = {
  data: propTypes.object.isRequired,
};

Room.defaultProps = {
  data: {},
  name: '---',
};

export default Room;
