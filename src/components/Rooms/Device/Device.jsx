import React from 'react'
import styles from './Device.module.css'

const Device = (props) => {
  return (
    <div className={styles.device}>
      <div className={styles.deviceIcon}>
        {props.deviceIcon}
      </div>
      <span>{props.deviceName}</span>
    </div>
  )
}

export default Device
