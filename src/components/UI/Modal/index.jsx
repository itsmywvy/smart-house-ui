import React, { useState } from 'react'
import styles from './Modal.module.css'


const Modal = ({visible, setVisible, children}) => {
  
  const rootClasses = [styles.modal]

  if (visible) {
    rootClasses.push(styles.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <span className={styles.close} onClick={() => setVisible(false)}>&times;</span>
          <form>
            <input id="name" type="text" placeholder="Type name..."/>
            <button>Owner</button>
            <button>Member</button>
            <button type="submit">Add member</button>
          </form>
      </div>
    </div>
  )
}

export default Modal
