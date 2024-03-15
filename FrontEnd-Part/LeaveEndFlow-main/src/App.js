import React, { useState } from 'react'
import Popup from './components/Popup'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import VideoChat from './components/videochat'
import Buttonplace from './components/Buttonplace'
import Endpage from './components/Endpage'
import { ScreenShare } from './components'

const App = () => {
  const [showEndpage, setShowEndpage] = useState(false)
  const [showScreenShare, setScreenShare] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleEndCall = () => {
    setShowPopup(!showPopup)
  }

  const handleScreenShare = () => {
    setScreenShare(true)
  }

  return (
    <>
      <Router>
        <div className='App'>
          {!showScreenShare && !showEndpage && <Navbar />}
          <Routes>
            <Route path='/' element={!showEndpage && <VideoChat />} />
            {showEndpage && <Route path='/endpage' element={<Endpage />} />}
          </Routes>
          {(!showEndpage && !showScreenShare && (
            <Buttonplace
              onEndCallClick={handleEndCall}
              onScreenShareClick={handleScreenShare}
            />
          )) || <Endpage />}
          {/* //problem */}
          <Popup isOpen={showPopup} handleClose={() => setShowPopup(false)}>
            <div className='popup__text'>
              <p style={{ paddingBottom: '2px', fontSize: '25px' }}>
                Leave Session?
              </p>
              <p
                style={{
                  padding: '8px',
                  fontSize: '17px',
                  marginLeft: '-9px',
                  color: 'grey',
                }}
              >
                Others will continue after you leave.You can join the session
                again.
              </p>
              <button
                onClick={() => {
                  setShowEndpage(true)
                  setShowPopup(false)
                }}
                style={{
                  backgroundColor: '#d93025',
                  color: 'white',
                  borderRadius: '6px',
                  width: '90px',
                  height: '30px',
                  marginTop: '11px',
                  marginLeft: '1px',
                  fontSize: '17px',
                  cursor: 'pointer',
                }}
              >
                Leave
              </button>
            </div>
          </Popup>
          <Routes>
            <Route path='/' element={!showScreenShare} />
            {showScreenShare && (
              <Route path='/screenshare' element={<ScreenShare />} />
            )}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
