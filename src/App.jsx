import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import './Components/styles.css';
import './index.css'
import CardSVG from './Components/CardSVG'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Hero />
      </div>
      <div className="cards">
        <Cards />
      </div>
      <div className="content inline-block p-30 invisible">
        <Hero />
      </div>
      <div className="content inline-block p-30 invisible">
        <Hero />
      </div>
      <div className="content inline-block p-30 invisible">
        <Hero />
      </div>
      <div className="content inline-block p-30 invisible">
        <Hero />
      </div>
      <div className="content inline-block p-30 invisible">
        <Hero />
      </div>
      
    </>
  )
}

export default App
