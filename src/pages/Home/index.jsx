import React from 'react';
import { ThermometherIcon, UserIcon } from '../../components/SvgIcons';
import Thermomether from '../../components/Thermomether';
import Diagram from '../../components/Diagram';
import Clock from '../../components/Clock';
import Box from '../../components/common/Box';
import Shortcuts from '../../components/Shortcuts';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import Layout from '../../components/Layout';
import { shallowEqual } from 'react-redux';
import { useGetUserDetailsQuery } from '../../store/reducers/authSlice';
import Scroller from '../../components/Scroller';
import WeatherStatus from '../../components/WeatherStatus';
import Avatar from '../../components/common/Avatar';

import styles from './Home.module.scss';

interface IMember {
  homeStatus: boolean;
  avatar: string;
  firstName: string;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const controls = useAppSelector((state) => state.home.controls);

  // const user = useAppSelector((state) => state.auth.userInfo);

  const {
    data: user,
    isFetching,
    isSuccess,
  } = useGetUserDetailsQuery('userDetailsHome', {
    // perform a refetch every 15mins
    // pollingInterval: 900000,
    // refetchOnMountOrArgChange: true,
  });

  const { loading, error, userInfo, userToken } = useAppSelector(
    (state) => state.auth,
    shallowEqual,
  );

  // React.useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(getMembers(user?.members_ids));
  //   }
  //   console.log('home data', user);
  // }, [user]);

  // const { data: members } = useGetUsersQuery();

  const membersFiltered =
    user?.members
      ?.filter((obj: IMember) => obj.homeStatus === true)
      .map((obj: IMember, i) => {
        return (
          <li key={`${obj}${i}`} className={styles.membersUser}>
            <Avatar image={obj.avatar} />
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

              <WeatherStatus />
            </div>
          </Box>
          <Box>
            <div className={styles.info__item}>
              <h3 className={styles.subtitle}>Members at home:</h3>

              <Scroller>
                {membersFiltered?.map((item, i) => (
                  <li key={`${item}${i}`} className={styles.scroller__item}>
                    {item.avatar ? <img src={item.avatar} alt="" /> : <UserIcon classNames="" />}
                    <span>{item.firstName}</span>
                  </li>
                ))}
              </Scroller>
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
