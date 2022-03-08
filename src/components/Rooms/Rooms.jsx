import React from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { BedroomIcon, KitchenIcon, LivingRoomIcon, BathroomIcon} from '../SvgIcons'
import Room from './Room/Room'
import styles from './Rooms.module.css'


const Rooms = (props) => {
  return (
      <div className={styles.room}>
        <div className={styles.roomContent}>
          <Route path="/rooms/kitchen" 
                 render={() => 
                            <Room 
                                data={props.room.kitchen}
                                tempF={props.room.temperatureF}
                                convertToFahrenheit={props.convertToFahrenheit}
                                name={'Kitchen'}
                            />}
          />
          <Route path="/rooms/bedroom" 
                 render={() => 
                            <Room 
                              convertToFahrenheit={props.convertToFahrenheit}
                              tempF={props.room.temperatureF}
                              data={props.room.bedroom}
                              name={'Bedroom'}
                            />}
          />
          <Route path="/rooms/livingroom" 
                 render={() => 
                            <Room 
                              convertToFahrenheit={props.convertToFahrenheit}
                              tempF={props.room.temperatureF}
                              data={props.room.livingroom}
                              name={'Living room'}
                            />}
          />
          <Route path="/rooms/bathroom" 
                 render={() => 
                            <Room
                              convertToFahrenheit={props.convertToFahrenheit}
                              tempF={props.room.temperatureF}
                              data={props.room.bathroom}
                              name={'Bathroom'}
                            />}
          />
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
