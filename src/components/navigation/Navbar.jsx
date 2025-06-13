import  { useState } from 'react'
import './Navbar.css'
import PersonalDropdown from '../../utils/dropdown-menu/PersonalDropdown'
import languages from '../../data/languages'
import { BUSINESS_DATA } from '../../data/bussines-data'

function Navbar({ lang, setLang, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const words = languages[lang]
  const business = BUSINESS_DATA[0]

  // Helper to handle navigation
  const handleNav = (navKey) => {
    setPage && setPage(navKey)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>
          {business.brandName}
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
        <div className={`navbar-menu-wrapper${menuOpen ? ' open' : ''}`}>
          {menuOpen && (
            <>
              <div className="navbar-burger-header">
                <div className="navbar-burger-brand">{business.brandName}</div>
              </div>
              <hr className="navbar-burger-hr" />
            </>
          )}
          <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
            <li><a href="#" onClick={() => handleNav('home')}>{words.home}</a></li>
            <li><a href="#" onClick={() => handleNav('features')}>{words.features}</a></li>
            <li><a href="#" onClick={() => handleNav('pricing')}>{words.pricing}</a></li>
            <li><a href="#" onClick={() => handleNav('about')}>{words.about}</a></li>
            {menuOpen && (
              <li>
                <div className="navbar-lang">
                  <PersonalDropdown lang={lang} setLang={setLang} words={words} />
                </div>
              </li>
            )}
          </ul>
         
          {!menuOpen && (
            <div className="navbar-lang">
              <PersonalDropdown lang={lang} setLang={setLang} words={words} />
            </div>
          )}
          {menuOpen && (
            <div className="navbar-burger-bottom">
              <hr className="navbar-burger-bottom-hr" />
              <div className="navbar-burger-number">{business.number}</div>
              <div className="navbar-burger-address">{business.address}</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
