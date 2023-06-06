import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

interface IModal {
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  children?: React.ReactElement;
}

const Modal = ({ visible, setVisible, children }: IModal) => {
  return visible
    ? createPortal(
        <div className={styles.modal} onClick={() => setVisible(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <>
              <span className={styles.close} onClick={() => setVisible(false)}>
                &times;
              </span>
              {children}
            </>
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
