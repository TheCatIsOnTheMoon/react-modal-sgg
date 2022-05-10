import React, { Fragment } from 'react'
import styles from './styles.module.css'
import Backdrop from './backdrop'

const wrapperStyles = {
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}

const modalStyles = {
  maxWidth: '500px',
  width: '100%',
  border: '1px solid #ddd',
  backgroundColor: 'white',
  margin: '100px auto 0',
  zIndex: 1,
  position: 'relative',
  padding: '10px',
  borderRadius: '20px',
  boxShadow: '0 2px 10px rgb(0 0 0 / 10%), 0 10px 15px rgb(0 0 0 / 20%)'
}

const closeBtnStyles = {
  position: 'absolute',
  right: '20px',
  top: '13px',
  background: 'none',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer'
}

const Modal = ({ children, show, onClickCloseBtn }) => {
  return (
    <Fragment>
      {show && (
        <div style={wrapperStyles}>
          <Backdrop onClick={onClickCloseBtn} />
          <div className='glass-effect' style={modalStyles}>
            <button onClick={onClickCloseBtn} style={closeBtnStyles}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Modal
