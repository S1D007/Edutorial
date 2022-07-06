import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <div className='mt-5 m-14' >
        <Home/>
      </div>
    </div>
  )
}

export default App