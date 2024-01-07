import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import ForeGround from './components/ForeGround'

function App() {

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <ForeGround/>
    </div>
  )
}

export default App
