import React from 'react'
import { Button } from 'react-bootstrap'

const emojiUnicode = '\u{1F44B}'

const Endpage = () => {
  return (
    <div className='new-page-container'>
      <div className='new-page-header'>
        <h1>Company</h1>
      </div>
      <div className='new-page-emoji'>{emojiUnicode}</div>
      <div className='new-page-content'>
        <div>
          <h1 style={{ marginLeft: '20px' }}>You left the session</h1>
          <p
            className='niceday'
            style={{ marginTop: '8px', marginLeft: '15px' }}
          >
            Have a nice day!
          </p>
          <br />
          <p
            // type='button'
            // class='btn btn-primary btn-lg'
            //className='endbutton1'
            //variant='secondary'
            style={{
              cursor: 'pointer',
              width: '123px',
              height: '38px',
              color: 'grey',
              fontSize: '15px',
              marginLeft: '95px',
            }}
          >
            Left by mistake?
          </p>
          <a href='/'>
            <Button
              className='btn btn-primary btn-lg endbutton2'
              onClick={() => {}}
              style={{
                cursor: 'pointer',
                backgroundColor: '#9c5bf4',
                borderRadius: '9px',
                width: '123px',
                height: '38px',
              }}
            >
              Rejoin
            </Button>
          </a>
        </div>
      </div>

      <div className='new-page-footer'>
        <Button
          type='button'
          class='btn  btn-lg'
          className='feedback-btn'
          variant='secondary'
          onClick={() => {}}
          style={{
            color: 'white',
            backgroundColor: 'black',
            borderRadius: '9px',
            cursor: 'pointer',
            width: '123px',
            height: '38px',
          }}
        >
          Send Feedback
        </Button>
      </div>
    </div>
  )
}

export default Endpage
