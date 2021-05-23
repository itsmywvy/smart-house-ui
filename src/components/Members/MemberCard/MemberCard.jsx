import React from 'react'
import { MessageIcon } from '../../SvgIcons'


import styles from '../Members.module.css'

const MemberCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatar} src={props.avatarSrc} alt=""/>
        </div>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.role}>{props.id === 1 ? props.role : props.role + " " + props.id}</div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.status}>Status: {props.status}</div>
        <div className={styles.room}>{props.room}</div>
      </div>
      <button className={`${styles.sendMessageBtn} btn`}>
        <MessageIcon/>
      </button>
    </div>
  )
}

export default MemberCard