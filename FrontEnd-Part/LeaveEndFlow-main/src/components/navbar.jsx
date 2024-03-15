import React from 'react'
import { Button } from 'react-bootstrap'
import Record from '../assets/Recording.svg'
import Participants from '../assets/participants.svg'

const navbar = () => {
  return (
    <nav className='navbar navbar-left'>
      <div className='navbar-text'>
        <b>Company </b> | Joy Banks, Iwobi (You)
      </div>
      <div className='navbar-buttons'>
        <Button
          type='button'
          class='btn btn-primary btn-lg'
          className='first_button'
          variant='secondary'
          onClick={() => {}}
        >
          <img
            src={Record}
            alt='SVG Icon'
            style={{
              fill: 'white',
              width: '20px',
              height: '20px',
              paddingTop: '2px',
            }}
          />
          <label
            style={{ color: 'white', fontSize: '17px', marginBottom: '10px' }}
          >
            Start Recording
          </label>
        </Button>
        <Button
          type='button'
          class='btn btn-primary btn-lg'
          className='second_button'
          variant='secondary'
          onClick={() => {}}
        >
          <img
            src={Participants}
            alt='SVG Icon'
            style={{
              fill: 'white',
              width: '20px',
              height: '20px',
              paddingTop: '2px',
            }}
          />
        </Button>
      </div>
    </nav>
  )
}

export default navbar
