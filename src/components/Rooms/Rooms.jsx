import React from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { BedroomIcon, KitchenIcon, LivingRoomIcon, BathroomIcon} from '../SvgIcons'
import Kitchen from './Kitchen/Kitchen'
import Bedroom from './Bedroom/Bedroom'
import styles from './Rooms.module.css'


const Rooms = () => {

  return (
      <div className={styles.room}>
        <div className={styles.roomContent}>
          <Route path="/rooms/kitchen" render={() => <Kitchen/>}/>
          <Route path="/rooms/bedroom" render={() => <Bedroom/>}/>
        </div>
        
        <nav className={styles.navigation}>
          <NavLink to="/rooms/bedroom" 
                   className={styles.navigation__item}
                   activeClassName={styles.active}>
            <BedroomIcon/>
            <span>Bedroom</span>
          </NavLink>
          <NavLink to="/rooms/kitchen"
                   className={styles.navigation__item}
                   activeClassName={styles.active}>
            <KitchenIcon/>
            <span>Kitchen</span>
          </NavLink>
          <NavLink to="/rooms/livingroom"
                   className={styles.navigation__item}
                   activeClassName={styles.active}>
            <LivingRoomIcon/>
            <span>Living room</span>
          </NavLink>
          <NavLink to="/rooms/bathroom"
                   className={styles.navigation__item}
                   activeClassName={styles.active}>
            <BathroomIcon/>
            <span>Bathroom</span>
          </NavLink>
        </nav>
      </div>
  )
}

export default Rooms
