import { useState } from 'react'
import viteLogo from '/vite.svg'
import '../App.css'

function Search() {
  

  return (
    <>
  <header>
  <ul style={{
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    backgroundColor: 'orange',
  }}>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="LogoManga" />
    </a>
    <button className='ButtonHeader' >For you</button>
    <button className='ButtonHeader' >Suggestions</button>
    <button className='ButtonHeader' >Search</button>
    <button className='ButtonHeader' >Historical</button>
    <button className='ButtonHeader' >Settings</button>
  </ul>
</header>


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

export default Search
