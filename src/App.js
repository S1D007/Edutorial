import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
function App() {
  return (
    <div id="containerr" className="" >
      <Navbar/>
      <div className='mt-5 m-14 max-w-none ' >
        <Home  />
      </div>
        <Footer/>
    </div>
  )
}

export default App