import React from 'react'
import { AddMemberIcon } from '../SvgIcons'
import MemberCard from './MemberCard/MemberCard'


import styles from './Members.module.css'

const Members = () => {

  const data = [
    {
      id: 1,
      name: 'Annie Gulberg',
      avatarSrc: 'https://images.ctfassets.net/hrltx12pl8hq/6YSoTmOYPk2VtQ7JSkPuzS/8250a3d54c1a714aa5e57f6a2826509e/shutterstock_1554086789.jpg?fit=fill&w=480&h=270',
      role: 'Owner',
      status: 'At home',
      room: 'Bedroom 1'
    },
    {
      id: 2,
      name: 'John Gulberg',
      avatarSrc: 'http://www.freedigitalphotos.net/images/category-images/118.jpg',
      role: 'Owner',
      status: 'At home',
      room: 'Bedroom 1'
    },
    {
      id: 3,
      name: 'Marie Gulberg',
      avatarSrc: 'https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'Owner',
      status: 'Out',
      room: 'Bedroom 2'
    },
  ]
  
  const cards = data.map(elem => {
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
	            <button className="btn btn-add">
	              <AddMemberIcon/>
	            </button>
        		</div>
      	</div>
   	</div>
  )
}

export default Members