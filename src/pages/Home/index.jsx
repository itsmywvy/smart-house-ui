import React from 'react';
import styles from './Home.module.scss';
import { ThermometherIcon, UserIcon, CloudsIcon } from '../../components/SvgIcons';
import Thermomether from '../../components/Thermomether';
import Diagram from '../../components/Diagram';
import Clock from '../../components/Clock';
import Box from '../../components/common/Box';
import { useGetMembersQuery } from '../../store/reducers/membersSlice';
import Shortcuts from '../../components/Shortcuts';
import { useAppSelector } from '../../hooks/redux';
import Layout from '../../components/Layout/Layout';
import { useGetOneUserQuery } from '../../store/reducers/homeSlice';
import { getJwtToken } from '../../utils/login';
import { decodeBase64 } from '../../utils/decodeBase64';
import { useDispatch } from 'react-redux';

interface IMember {
  homeStatus: boolean;
  avatar: string;
  firstName: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const controls = useAppSelector((state) => state.home.controls);

  const { data: members } = useGetMembersQuery();
  const { data: user } = useGetOneUserQuery(decodeBase64(getJwtToken()).id);

  const membersFiltered =
    members
      ?.filter((obj: IMember) => obj.homeStatus === true)
      .map((obj: IMember, i) => {
        return (
          <li key={`${obj}${i}`} className={styles.membersUser}>
            {obj.avatar ? <img src={obj.avatar} alt="" /> : <UserIcon classNames="" />}
            <span>{obj.firstName}</span>
          </li>
        );
      }) ?? [];

  return (
    <Layout>
      <div className={`${styles.home}`}>
        <h1 className={`${styles.title} content-title`}>Welcome, {user?.firstName}</h1>
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
    </Layout>
  );
};

export default Home;
