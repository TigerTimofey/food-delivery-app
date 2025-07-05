import './App.css'
import { useState, useEffect } from 'react'
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
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item, quantity = 1) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(cartItem => cartItem.title === item.title)
      
      if (existingItem) {
        return currentItems.map(cartItem =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      } else {
        return [...currentItems, { ...item, quantity }]
      }
    })
  }

  const removeFromCart = (index) => {
    setCartItems(currentItems => currentItems.filter((_, i) => i !== index))
  }

  const updateCartQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(index)
    } else {
      setCartItems(currentItems =>
        currentItems.map((item, i) =>
          i === index ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const clearCart = () => {
    setCartItems([])
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
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onUpdateCartQuantity={updateCartQuantity}
        onClearCart={clearCart}
      />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/features" element={<Features lang={lang} onAddToCart={addToCart} />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App
