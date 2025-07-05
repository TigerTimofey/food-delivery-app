import React, { useState } from 'react'
import './ShoppingCart.css'
import { BUSINESS_DATA } from '../../data/bussines-data'
import { CART_TEXT } from '../../data/languages'
import Checkout from './checkout/Checkout'
import SuccesMessage from '../../utils/success-message/SuccesMessage'

function ShoppingCart({ cartItems = [], onRemoveItem, onUpdateQuantity, onClearCart, lang = 'en', isFloating = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const business = BUSINESS_DATA[0]
  const cartText = CART_TEXT[lang] || CART_TEXT.en

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  
  const taxRate = business.countryTax / 100
  const priceWithoutTax = totalPrice / (1 + taxRate)
  const taxAmount = totalPrice - priceWithoutTax

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`shopping-cart${isFloating ? ' floating' : ''}`}>
      <button 
        className={`cart-toggle-btn${isFloating ? ' floating' : ''}`} 
        onClick={toggleCart}
        aria-label={cartText.title}
      >
        <svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.36 6H1.64a1 1 0 0 0-1 1.13l.73 5.5a1 1 0 0 0 1 .87h9.24a1 1 0 0 0 1-.87l.73-5.5A1.001 1.001 0 0 0 12.36 6M4.5 8.5V11M7 8.5V11m2.5-2.5V11"/>
            <path d="M9.48 1.54A2.79 2.79 0 0 1 11.78 4L12 6M2 6l.22-2a2.79 2.79 0 0 1 2.3-2.44"/>
            <path d="M9.5 1.75A1.25 1.25 0 0 1 8.25 3h-2.5a1.25 1.25 0 0 1 0-2.5h2.5A1.25 1.25 0 0 1 9.5 1.75"/>
          </g>
        </svg>
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>

      {isOpen && isFloating && (
        <div className="cart-backdrop" onClick={toggleCart}></div>
      )}

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>{cartText.title}</h3>
            <button 
              className="cart-close-btn" 
              onClick={toggleCart}
              aria-label="Close cart"
            >
              ×
            </button>
          </div>
          
          <div className="cart-content">
            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>{cartText.empty}</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div className="cart-item-info">
                        <h4 className="cart-item-title">{item.title}</h4>
                        <p className="cart-item-price">{item.price} €</p>
                      </div>
                      <div className="cart-item-controls">
                        <div className="cart-item-counter">
                          <button 
                            className="cart-item-btn"
                            onClick={() => onUpdateQuantity && onUpdateQuantity(index, item.quantity - 1)}
                            aria-label={cartText.decrease}
                          >
                            -
                          </button>
                          <span className="cart-item-quantity">{item.quantity}</span>
                          <button 
                            className="cart-item-btn"
                            onClick={() => onUpdateQuantity && onUpdateQuantity(index, item.quantity + 1)}
                            aria-label={cartText.increase}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className="cart-item-remove"
                          onClick={() => onRemoveItem && onRemoveItem(index)}
                          aria-label={cartText.removeItem}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="cart-footer">
                  <div className="cart-tax-breakdown">
                    <div className="cart-subtotal">
                      <span>{cartText.subtotal}: {priceWithoutTax.toFixed(2)} €</span>
                    </div>
                    <div className="cart-tax">
                      <span>{cartText.tax} {business.countryTax}%: {taxAmount.toFixed(2)} €</span>
                    </div>
                    <div className="cart-total">
                      <strong>{cartText.total}: {totalPrice.toFixed(2)} €</strong>
                    </div>
                  </div>
                  <div className="cart-actions">
                    <button 
                      className="cart-clear-btn"
                      onClick={onClearCart}
                    >
                      {cartText.clearCart}
                    </button>
                    <button 
                      className="cart-checkout-btn"
                      onClick={() => setIsCheckoutOpen(true)}
                    >
                      {cartText.checkout}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Checkout
        open={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        lang={lang}
        onOrderPlaced={() => {
          setIsCheckoutOpen(false);
          setIsOpen(false);
          onClearCart && onClearCart();
          setShowSuccess(true);
        }}
      />
      <SuccesMessage
        message="Order placed successfully!"
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  )
}

export default ShoppingCart
