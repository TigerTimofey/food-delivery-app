import React, { useState } from 'react'
import './Navbar.css'
import PersonalDropdown from '../utils/PersonalDropdown'
import languages from '../data/languages'

function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const words = languages[lang]

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          LOGO
        </div>
        <button
          className={`navbar-burger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
        <div
          className={`navbar-menu-wrapper${menuOpen ? ' open' : ''}`}
        >
          <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
            <li><a href="#">{words.home}</a></li>
            <li><a href="#">{words.features}</a></li>
            <li><a href="#">{words.pricing}</a></li>
            <li><a href="#">{words.about}</a></li>
          </ul>
          <div className="navbar-lang">
            <PersonalDropdown lang={lang} setLang={setLang} words={words} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
