import React from 'react';

import styles from './Thermomether.module.scss';

interface IThermomether {
  icon?: React.ReactNode;
  children: React.ReactNode;
  value: number;
  scaleColor: string;
  bgColor?: string;
}

const Thermomether: React.FC<IThermomether> = ({ icon, children, value, scaleColor, bgColor }) => {
  const wrapStyles = {
    background: bgColor,
  } as React.CSSProperties;

  const scaleStyle = {
    height: value + '%',
    background: scaleColor,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    zIndex: -1,
  } as React.CSSProperties;

  return (
    <div className={styles.termomether}>
      <div className={styles['termomether-wrapper']} style={wrapStyles}>
        {icon}
        <div className={styles['termomether-wrapper__item']} style={scaleStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Thermomether;
