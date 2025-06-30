import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import PersonalDropdown from '../../utils/dropdown-menu/PersonalDropdown'
import ShoppingCart from '../shopping/ShoppingCart'
import languages from '../../data/languages'
import { BUSINESS_DATA } from '../../data/bussines-data'

function Navbar({ lang, setLang, cartItems, onRemoveFromCart, onUpdateCartQuantity, onClearCart }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const words = languages[lang]
  const business = BUSINESS_DATA[0]
  const navigate = useNavigate()
  const location = useLocation()

  // Determine active nav item by path
  const getActiveKey = () => {
    if (location.pathname.startsWith('/features')) return 'features'
    if (location.pathname.startsWith('/pricing')) return 'pricing'
    if (location.pathname.startsWith('/about')) return 'about'
    return 'home'
  }
  const activeKey = getActiveKey()

  useEffect(() => {
    if (menuOpen && window.innerWidth <= 900) {
      document.body.classList.add('navbar-lock-scroll')
    } else {
      document.body.classList.remove('navbar-lock-scroll')
    }
    return () => {
      document.body.classList.remove('navbar-lock-scroll')
    }
  }, [menuOpen])

  const handleNav = (navKey) => {
    let path = '/'
    switch (navKey) {
      case 'home':
        path = '/'
        break
      case 'features':
        path = '/features'
        break
      case 'pricing':
        path = '/pricing'
        break
      case 'about':
        path = '/about'
        break
      default:
        path = '/'
    }
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <div className="navbar-logo-wrap">
          <img
            src="/img5.avif"
            alt="Logo"
            className="navbar-logo-img"
          />
          <div className="navbar-logo" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>
            {business.brandName}
          </div>
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
            <li className={activeKey === 'home' ? 'active' : ''}>
              <a onClick={() => handleNav('home')} className={activeKey === 'home' ? 'active' : ''}>{words.home}</a>
            </li>
            <li className={activeKey === 'features' ? 'active' : ''}>
              <a onClick={() => handleNav('features')} className={activeKey === 'features' ? 'active' : ''}>{words.features}</a>
            </li>
            <li className={activeKey === 'pricing' ? 'active' : ''}>
              <a onClick={() => handleNav('pricing')} className={activeKey === 'pricing' ? 'active' : ''}>{words.pricing}</a>
            </li>
            <li className={activeKey === 'about' ? 'active' : ''}>
              <a onClick={() => handleNav('about')} className={activeKey === 'about' ? 'active' : ''}>{words.about}</a>
            </li>
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
              <ShoppingCart 
                cartItems={cartItems}
                onRemoveItem={onRemoveFromCart}
                onUpdateQuantity={onUpdateCartQuantity}
                onClearCart={onClearCart}
                lang={lang}
              />
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
      
      {/* Floating cart */}
      <div className="navbar-floating-cart">
        <ShoppingCart 
          cartItems={cartItems}
          onRemoveItem={onRemoveFromCart}
          onUpdateQuantity={onUpdateCartQuantity}
          onClearCart={onClearCart}
          lang={lang}
          isFloating={true}
        />
      </div>
    </nav>
  )
}

export default Navbar
