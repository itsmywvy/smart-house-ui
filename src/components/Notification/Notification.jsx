import React, { useEffect, useRef, useState } from 'react'
import styles from './Notification.module.css'
import notifyIcon from '../../assets/images/notify.svg'

const Notification = () => {
  const [popUpActive, setPopUpActive] = useState(false)

  const onClickedNotify = () => {
    setPopUpActive(state => state = !popUpActive)
  }

  const currentBtnRef = useRef(null)
  const currentWindowRef = useRef(null)

  const onClickOutsideButton = (e) => {
      if (!e.path.includes(currentBtnRef.current) && !e.path.includes(currentWindowRef.current)) {
        setPopUpActive(false)
      }
  }
  
  useEffect(() => document.body.addEventListener('click', onClickOutsideButton), [])

  

  return (
    <div>
      <button ref={currentBtnRef} className={`${styles.button} btn`} onClick={onClickedNotify}>
        <img src={notifyIcon} alt=""/>
      </button>
     {popUpActive && <div ref={currentWindowRef} className={styles.wrapper}>
        <span>Haven’t got any notifications yet</span>
      </div>}
    </div>
  )
}

export default Notification
