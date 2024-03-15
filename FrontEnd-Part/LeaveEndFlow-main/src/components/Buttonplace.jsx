import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Endpage from './Endpage'
import Mute from '../assets/Mute.svg'
import Video from '../assets/Video.svg'
import Screenshare from '../assets/Screen share.svg'
import Threedots from '../assets/three dots.svg'
import Endcall from '../assets/End call.svg'
import HandRaise from '../assets/Hand raise.svg'
import Left from '../assets/Left.svg'
import Chat from '../assets/Chat.svg'
import ScreenShareElement from './ScreenShare'
import { Link } from 'react-router-dom'

const Buttonplace = ({ onEndCallClick, onScreenShareClick }) => {
  const [showPopup, setShowPopup] = useState(false)
  // const [isSplit, setIsSplit] = useState(false)
  return (
    <div className='footer'>
      <div className='left-button1-container'>
        <Button
          type='button'
          class='btn btn-primary btn-lg'
          className='left-button1'
          variant='secondary'
          onClick={() => {}}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={Left}
            alt='SVG Icon'
            style={{
              // fill: '#9c5bf4',
              width: '30px',
              height: '30px',
              paddingTop: '2px',
            }}
          />
        </Button>
      </div>
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button1'
        variant='secondary'
        onClick={() => {}}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={Mute}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '30px',
            height: '30px',
            paddingTop: '2px',
          }}
        />
      </Button>
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button2'
        variant='secondary'
        onClick={() => {}}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={Video}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '32px',
            height: '30px',
            paddingTop: '2px',
          }}
        />
      </Button>
      {/* <Link to='/screenshare'> */}
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button3'
        variant='secondary'
        onClick={() => {}}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={Screenshare}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '30px',
            height: '30px',
            paddingTop: '2px',
          }}
        />
      </Button>
      {/* </Link> */}
      {/* {isSplit && <ScreenShare />} */}
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button4'
        variant='secondary'
        onClick={() => {}}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={Threedots}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '30px',
            height: '30px',
            paddingTop: '2px',
          }}
        />
      </Button>
      <div className='popup'>
        <Button
          type='button'
          className='btn btn-primary btn-lg button5'
          variant='secondary'
          onClick={onEndCallClick}
          style={{ borderRadius: '5px', cursor: 'pointer' }}
        >
          <img
            src={Endcall}
            alt='SVG Icon'
            style={{
              fill: '#9c5bf4',
              width: '65px',
              height: '30px',
              paddingTop: '2px',
            }}
          />
        </Button>
        {showPopup && (
          <div className='popuptext'>Your popup text goes here.</div>
        )}
      </div>
      <div className='right-buttons-container'>
        <Button
          type='button'
          class='btn btn-primary btn-lg'
          className='right-button1'
          variant='secondary'
          onClick={() => {}}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={HandRaise}
            alt='SVG Icon'
            style={{
              fill: '#9c5bf4',
              width: '30px',
              height: '30px',
              paddingTop: '2px',
            }}
          />
        </Button>
        <Button
          type='button'
          class='btn btn-primary btn-lg'
          className='right-button2'
          variant='secondary'
          onClick={() => {}}
          style={{ cursor: 'pointer', marginLeft: '10px' }}
        >
          <img
            src={Chat}
            alt='SVG Icon'
            style={{
              fill: '#9c5bf4',
              width: '30px',
              height: '30px',
              paddingTop: '2px',
            }}
          />
        </Button>
      </div>
    </div>
  )
}

export default Buttonplace
