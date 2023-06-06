// import React from 'react';
// import styles from './ProfileButton.module.scss';
// import { UserIcon } from '../SvgIcons';
// import Logout from '../Logout/Logout';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../store/reducers/authSlice';

// import { useGetUserDetailsQuery } from '../../store/reducers/authSlice';

// import logoutIcon from '../../assets/images/logout.png';
// import Avatar from '../common/Avatar';
// import Dropdown from '../common/Dropdown';

// const ProfileButton = ({ handleClick, visibleDropdown }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   const [visibleDropdown, setVisibleDropdown] = React.useState(false);

//   const showDropdown = (val) => {
//     setVisibleDropdown(val);
//   };

//   const {
//     data: user,
//     isFetching,
//     isSuccess,
//   } = useGetUserDetailsQuery('userDetails', {
//     // perform a refetch every 15mins
//     pollingInterval: 900000,
//     refetchOnMountOrArgChange: true,
//   });

//   return (
//     <div className={styles.wrapper} onClick={() => handleClick(!visibleDropdown)}>
//       <Avatar image={user?.avatar} />

//       {visibleDropdown && <Dropdown trigger={showDropdown}/>}
//     </div>
//   );
// };

// export default ProfileButton;
// && (
//   <div className={styles.dropdown}>
//     <ul>
//       <li
//         style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
//         onClick={onLogout}>
//         <img style={{ width: 15, marginRight: 8 }} src={logoutIcon} />
//         <span>Log out</span>
//       </li>
//     </ul>
//   </div>
