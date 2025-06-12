import './App.css'
import Navbar from './components/Navbar'
import React, { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en')

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
    </>
  )
}

export default App
