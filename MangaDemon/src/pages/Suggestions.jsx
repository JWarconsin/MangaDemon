import { useState } from 'react'
import viteLogo from '/vite.svg'
import '../App.css'

function Suggestions() {
  

  return (
    <>



    <body>
    <div className="container" style={{
      textAlign: 'center',
      display: 'flex',
    }}>
      <div className="New" style={{
        backgroundColor: 'blue',
        width: '25%',
        marginLeft : '5%',
        marginRight : '5%',
      }
      }>
        <h1>New</h1>
      </div>
      <div className="Most liked" style={{
        backgroundColor: 'blue',
        width: '25%',
        marginRight : '5%',
      }}>
        <h1>Most liked</h1>
      </div>
      <div className="Most viewed" style={{
        backgroundColor: 'blue',
        width: '25%',
        marginRight : '5%',
      }}>
        <h1>Most viewed</h1>
      </div>
    </div>
    </body>
    </>
  )
}

export default Suggestions
