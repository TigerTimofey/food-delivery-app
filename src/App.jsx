import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Home from './components/pages/home/Home'
import Features from './components/pages/features/Features'
import Pricing from './components/pages/pricing/Pricing'
import About from './components/pages/about/About'
import Footer from './components/footer/Footer'

function App() {
  const [lang, setLang] = useState('en')
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShowFooter(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/features" element={<Features lang={lang} />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App
