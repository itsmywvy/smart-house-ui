import React from 'react';
import styles from './Scale.module.scss';

type ScaleProps = {
  icon?: React.ReactNode;
  value: number;
  scaleColor: string;
  bgColor?: string;
};

const Scale = ({ icon, value, scaleColor, bgColor }: ScaleProps) => {
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
    <div className={styles.scale}>
      <div className={styles['scale-wrapper']} style={wrapStyles}>
        {icon}
        <div className={styles['scale-wrapper__item']} style={scaleStyle}></div>
      </div>
    </div>
  );
};

export default Scale;
