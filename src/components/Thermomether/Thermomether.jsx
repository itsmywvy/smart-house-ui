import React from 'react';

import styles from './Thermomether.module.css'

const Thermomether = (props) => {

  const calc = props.cssStyles.height / props.value

  return (
    <div className={styles.termometherWrapper}>
      <div className={styles.termomether} style={props.cssStyles}>
        {props.icon}
        <span className={props.value === null || '' ? '' : styles.temperature}>{props.value}</span>
        <div className={styles.termScale}></div>
      </div>
    </div>
  )
}

export default Thermomether