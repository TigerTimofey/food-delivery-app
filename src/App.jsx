import './App.css'
import Navbar from './components/navigation/Navbar'
import React, { useState, useEffect } from 'react'
import Home from './components/pages/home/Home'
import Features from './components/pages/features/Features'
import Pricing from './components/pages/pricing/Pricing'
import About from './components/pages/about/About'
import Footer from './components/footer/Footer'
import { HOME_TEXT } from './data/languages'

function App() {
  const [lang, setLang] = useState('en')
  const [page, setPage] = useState('home')
  const [showFooter, setShowFooter] = useState(false)

  // Map nav keys to components
  const pageComponents = {
    home: <Home lang={lang} />,
    features: <Features lang={lang} />,
    pricing: <Pricing />,
    about: <About />
  }

  useEffect(() => {
    function onScroll() {
      setShowFooter(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar lang={lang} setLang={setLang} setPage={setPage} />
      {pageComponents[page]}
      {showFooter && <Footer />}
    </>
  )
}

export default App
