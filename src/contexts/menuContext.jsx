import React from 'react';
import {
  BillingIcon,
  HomeIcon,
  MembersIcon,
  SecurityIcon,
  StatisticsIcon,
} from '../components/SvgIcons';

const navLinks = [
  { url: '/rooms/bedroom', name: 'Rooms', icon: <HomeIcon /> },
  { url: '/security', name: 'Security', icon: <SecurityIcon /> },
  { url: '/statistics', name: 'Statistics', icon: <StatisticsIcon /> },
  { url: '/members', name: 'Members', icon: <MembersIcon /> },
  { url: '/billing', name: 'Billing', icon: <BillingIcon /> },
];

export const MenuContext = React.createContext(navLinks);

const MenuProvider = ({ children }) => {
  return <MenuContext.Provider value={navLinks}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
