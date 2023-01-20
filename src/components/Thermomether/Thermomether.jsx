import React from 'react';

import styles from './Thermomether.module.scss';

const Thermomether = ({ icon, children, value, scaleColor, bgColor }) => {
  const wrapStyles = {
    background: bgColor,
  };

  const scaleStyle = {
    height: value + '%',
    background: scaleColor,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    zIndex: -1,
  };

  const fadeInScale = `
      @keyframes scaleAnim {
        from {
          height: 0%;
        }
        to {
          height: ${value};
        }
      }
    `;

  return (
    <div className={styles.termometherWrapper}>
      <div className={styles.termomether} style={wrapStyles}>
        {icon}
        <div className={styles.scale} style={scaleStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Thermomether;
