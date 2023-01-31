import React from 'react';
import styles from './Home.module.scss';
import { ThermometherIcon, UserIcon, CloudsIcon } from '../../components/SvgIcons';
import Thermomether from '../../components/Thermomether';
import Diagram from '../../components/Diagram';
import Clock from '../../components/Clock';
import Box from '../../components/common/Box';
import { fetchMembers } from '../../store/reducers/membersSlice';
import Shortcuts from '../../components/Shortcuts';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface IMember {
  homeStatus: boolean;
  avatar: string;
  firstName: string;
}

const Home: React.FC = () => {
  console.log('render home');

  const dispatch = useAppDispatch();
  const controls = useAppSelector((state) => state.home.controls);
  const members = useAppSelector((state) => state.members.data);

  React.useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  const membersFiltered = members
    .filter((obj: IMember) => obj.homeStatus === true)
    .map((obj: IMember, i) => {
      return (
        <li key={`${obj}${i}`} className={styles.membersUser}>
          {obj.avatar ? <img src={obj.avatar} alt="" /> : <UserIcon />}
          <span>{obj.firstName}</span>
        </li>
      );
    });

  return (
    <div className={`${styles.home}`}>
      <h1 className={`${styles.title} content-title`}>Welcome, David</h1>
      <div className={styles.info}>
        <Box>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Time</h3>
            <Clock />
          </div>
        </Box>
        <Box>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Outdoor Temperature</h3>
            <div className={styles.temp}>
              <span>+{controls.temperature}°C</span>
              <CloudsIcon />
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.info__item}>
            <h3 className={styles.subtitle}>Members at home:</h3>
            <ul className={styles.members}>{membersFiltered}</ul>
          </div>
        </Box>
      </div>
      <h2 className={`content-subtitle ${styles.controls__subtitle}`}>Controls:</h2>
      <div className={styles.controlsInfo}>
        <Box>
          <div className={styles.controlsInfo__item}>
            <h3>Light Intensity</h3>
            <Diagram value={controls.light} color={'#65BDC0'} />
          </div>
        </Box>

        <Box>
          <div className={styles.controlsInfo__item}>
            <h3>Air Conditioning</h3>
            <Diagram value={controls.air} color={'#1D2343'} />
          </div>
        </Box>
        <Box>
          <div className={styles.controlsInfo__item}>
            <h3>Temperature</h3>
            <Thermomether
              icon={<ThermometherIcon />}
              scaleColor="var(--red)"
              value={controls.temperature * 2}>
              <span>+{controls.temperature}°C</span>
            </Thermomether>
          </div>
        </Box>

        <Shortcuts />
      </div>
    </div>
  );
};

export default Home;
