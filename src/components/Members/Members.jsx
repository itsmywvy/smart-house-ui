import React from 'react'
import { AddMemberIcon } from '../SvgIcons'
import MemberCard from './MemberCard/MemberCard'


import styles from './Members.module.css'

const Members = (props) => {
  debugger
  const cards = props.data.map(elem => {
    return <MemberCard 
              id={elem.id}
              name={elem.name}
              avatarSrc={elem.avatarSrc}
              role={elem.role}
              status={elem.status}
              room={elem.room}/>
  })

  return (
    <div>
        <h1 className={`${styles.title} content-title`}>Members</h1>
        <div className={styles.membersCards}>
          {cards}
          	<div className={`${styles.card} ${styles.emptyCard}`}>
	            <button className="btn btn-add" onClick={props.addMember}>
	              <AddMemberIcon/>
	            </button>
        		</div>
      	</div>
   	</div>
  )
}

export default Members