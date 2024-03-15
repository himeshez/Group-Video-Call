import React from 'react'
import Navbar from './navbar'
import ButtonPlace from './Buttonplace'

const ScreenShare = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='screen-split'>
        <div className='left-box' style={{ color: 'white' }}>
          <div>
            You are sharing your screen
            <a href='/' style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  width: '160px',
                  height: '50px',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '34px',
                  cursor: 'pointer',
                  fontSize: '20px',
                  marginTop: '20px',
                  marginLeft: '94px',
                  // marginRight: '200px',
                  alignItems: 'center',
                  display: 'block',
                }}
              >
                x stop presenting
              </button>
            </a>
          </div>
        </div>

        <div className='right-box'>User</div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <ButtonPlace />
      </div>
    </>
  )
}

export default ScreenShare
