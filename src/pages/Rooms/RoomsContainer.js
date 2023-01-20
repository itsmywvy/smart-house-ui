import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setRooms } from '../../redux/rooms-reducer';
import Rooms from './Rooms';
import Preloader from '../../components/common/Preloader/Preloader';

const RoomsContainer = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  const isFetching = useSelector((state) => state.isFetching);

  React.useEffect(() => {
    dispatch(setRooms());
  }, []);

  return isFetching ? <Preloader /> : <Rooms rooms={rooms} />;
};

export default RoomsContainer;
