import React from 'react'
import './Popup.css'

const Popup = ({ isOpen, handleClose, children }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className='popup'>
      <div className='popup__overlay' onClick={handleClose} />
      <div className='popup__container'>
        <button className='popup__close-button' onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Popup
