import './App.css'
import Navbar from './components/navigation/Navbar'
import React, { useState } from 'react'
import Home from './components/pages/home/Home'
import Features from './components/pages/features/Features'
import Pricing from './components/pages/pricing/Pricing'
import About from './components/pages/about/About'

function App() {
  const [lang, setLang] = useState('en')
  const [page, setPage] = useState('home')

  // Map nav keys to components
  const pageComponents = {
    home: <Home />,
    features: <Features />,
    pricing: <Pricing />,
    about: <About />
  }

  return (
    <>
      <Navbar lang={lang} setLang={setLang} setPage={setPage} />
      {pageComponents[page]}
    </>
  )
}

export default App
