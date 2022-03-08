import React from 'react'
import styles from './Box.module.css'

const Box = ({children}) => {
  return (
    <div className={styles.boxWrapper}>
      {children}
    </div>
  )
}

export default Box
