import React from 'react';

import styles from './Thermomether.module.css'

const Thermomether = (props) => {
  const wrapStyles = {
    background: props.bgColor
  }

  const scaleStyle = {
    height: props.value + '%',
    background: props.scaleColor,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    zIndex: -1
  }

  const fadeInScale = 
    `
      @keyframes scaleAnim {
        from {
          height: 0%;
        }
        to {
          height: ${props.value};
        }
      }
    `

  return (
    <div className={styles.termometherWrapper}>
      <div className={styles.termomether} style={wrapStyles}>
        {props.icon ||  <span className={styles.temperature}>{props.children}</span>}
       
        <div className={styles.scale} style={scaleStyle}></div>
      </div>
    </div>
  )
}

export default Thermomether