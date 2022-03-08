import React from 'react'
import { MessageIcon, MembersIcon} from '../../SvgIcons'


import styles from '../Members.module.css'

const MemberCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.avatarWrapper}>
          {props.avatar ? <img className={styles.avatar} src={props.avatar} alt=""/> : <MembersIcon/> }
        </div>
        <div className={styles.name}>{props.firstName} {props.lastName}</div>
        <div className={styles.role}>{props.id === 1 ? props.membership : props.membership + " " + props.id}</div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.status}>Status: {props.status ? 'At home' : 'Out'}</div>
        <div className={styles.room}>{props.location}</div>
      </div>
      <button className={`${styles.sendMessageBtn} btn`}>
        <MessageIcon/>
      </button>
    </div>
  )
}

export default MemberCard