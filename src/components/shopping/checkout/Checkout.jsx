import { useState, useEffect } from 'react'
import './Checkout.css'
import { BUSINESS_DATA } from '../../../data/bussines-data'
import { CHECKOUT_TEXT, BUTTON_TEXT } from '../../../data/languages'

function Checkout({ open, onClose, cartItems = [], lang = 'en', onOrderPlaced }) {
  const initialFormData = {
    firstName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    deliveryType: 'delivery',
    paymentMethod: 'cash', 
    notes: ''
  }
  const [formData, setFormData] = useState(initialFormData)
  const [step, setStep] = useState(1)
  const [showBill, setShowBill] = useState(false)
  const [selectedBank, setSelectedBank] = useState(null)
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')
  const [discount, setDiscount] = useState(0)

  const business = BUSINESS_DATA[0]
  const checkoutText = CHECKOUT_TEXT[lang] || CHECKOUT_TEXT.en
  const couponCode = business.couponCode
  const couponCodeDiscount = business.couponCodeDiscount 

  const totalPriceRaw = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalPrice = totalPriceRaw * (1 - discount)
  const taxRate = business.countryTax / 100
  const priceWithoutTax = totalPrice / (1 + taxRate)
  const taxAmount = totalPrice - priceWithoutTax

  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('no-scroll')
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'auto'
      document.body.classList.remove('no-scroll')
    }
  }, [open, onClose])

  useEffect(() => {
    if (!showBill) return;
    function handleClickOutside(event) {
      const dropdown = document.querySelector('.checkout-bill-dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        setShowBill(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showBill]);

  useEffect(() => {
    if (!open) return;
    setCoupon('')
    setCouponApplied(false)
    setCouponError('')
    setDiscount(0)
    setSelectedBank(null)
  }, [open])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDeliveryType = (type) => {
    setFormData(prev => ({ ...prev, deliveryType: type }))
  }

  const handleNext = () => setStep(s => s + 1)
  const handleBack = () => setStep(s => s - 1)

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      ...formData,
      cartItems: cartItems.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        total: (item.price * item.quantity).toFixed(2)
      })),
      totalPrice: totalPrice.toFixed(2)
    };
    console.log('Checkout submitted:', orderDetails);
    if (onOrderPlaced) {
      onOrderPlaced();
    } else {
      onClose();
    }
    setFormData(initialFormData)
    setStep(1)
    setSelectedBank(null)
  }

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (coupon.trim().toUpperCase() === couponCode.toUpperCase()) {
      setCouponApplied(true)
      setCouponError('')
      setDiscount((couponCodeDiscount || 0) / 100)
    } else {
      setCouponApplied(false)
      setCouponError(checkoutText.couponInvalid)
      setDiscount(0)
    }
  }

  const stepTitles = [
    checkoutText.personalInfo,
    checkoutText.deliveryAddress,
    checkoutText.paymentMethod
  ]

  if (!open) return null

  return (
    <div className="checkout-backdrop" onClick={onClose}>
      <div className="checkout-modal" onClick={e => e.stopPropagation()}>
        <div className="checkout-header">
          <h2 className="checkout-title">
            <span>{checkoutText.title}</span>
            <img
              src="images/svg/bill-line.svg"
              alt=""
              className="checkout-bill-icon"
              onClick={(e) => {
                e.stopPropagation()
                setShowBill((prev) => !prev)
              }}
              onTouchEnd={(e) => {
                e.stopPropagation()
                setShowBill((prev) => !prev) 
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setShowBill((prev) => !prev)
                }
              }}
              aria-label="Show bill"
              role="button"
            />
            {showBill && (
              <div className="checkout-bill-dropdown">
                <div className="checkout-summary">
                  <h3 className="checkout-summary-title">{checkoutText.orderSummary}</h3>
                  <div className="checkout-items">
                    {cartItems.map((item, index) => (
                      <div key={index} className="checkout-item">
                        <div className="checkout-item-info">
                          <span className="checkout-item-name">{item.title}</span>
                          <span className="checkout-item-quantity">x{item.quantity}</span>
                        </div>
                        <span className="checkout-item-price">{(item.price * item.quantity).toFixed(2)} €</span>
                      </div>
                    ))}
                  </div>
                  <div className="checkout-totals">
                    <div className="checkout-total-row">
                      <span>{checkoutText.subtotal}</span>
                      <span>
                        {couponApplied ? (
                          <>
                            <span className="checkout-old-price">
                              {(totalPriceRaw / (1 + taxRate)).toFixed(2)} €
                            </span>
                            <span className="checkout-new-price">
                              {priceWithoutTax.toFixed(2)} €
                            </span>
                          </>
                        ) : (
                          <>{priceWithoutTax.toFixed(2)} €</>
                        )}
                      </span>
                    </div>
                    <hr className="checkout-totals-divider" />
                    <div className="checkout-total-row">
                      <span>{checkoutText.tax} {business.countryTax}%</span>
                      <span>
                        {couponApplied ? (
                          <>
                            <span className="checkout-old-price">
                              {(totalPriceRaw - totalPriceRaw / (1 + taxRate)).toFixed(2)} €
                            </span>
                            <span className="checkout-new-price">
                              {taxAmount.toFixed(2)} €
                            </span>
                          </>
                        ) : (
                          <>{taxAmount.toFixed(2)} €</>
                        )}
                      </span>
                    </div>
                    <div className="checkout-total-row checkout-final-total">
                      <span>{checkoutText.total}</span>
                      <span>
                        {couponApplied ? (
                          <>
                            <span className="checkout-old-price">
                              {totalPriceRaw.toFixed(2)} €
                            </span>
                            <span className="checkout-new-price">
                              {totalPrice.toFixed(2)} €
                            </span>
                          </>
                        ) : (
                          <>&nbsp;&nbsp;{totalPrice.toFixed(2)} €</>
                        )}
                      </span>
                    </div>
                  </div>
                  {couponApplied && (
                    <div className="checkout-coupon-success-bill">
                      -{couponCodeDiscount}% {checkoutText.couponSuccess}
                    </div>
                  )}
                </div>
              </div>
            )}
          </h2>
          <button className="checkout-close" onClick={onClose} aria-label="Close checkout">×</button>
        </div>
        <div className="checkout-content">
          <div className="checkout-form-section">
            <div className="checkout-steps-pagination">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={`checkout-step-dot${step === n ? ' active' : ''}`}
                />
              ))}
            </div>
            <div className="checkout-step-title">
              {stepTitles[step - 1]}
            </div>
            <div className="checkout-step-content">
              {step === 1 && (
                <div className="checkout-section">
                  <div className="checkout-row">
                    <div className="checkout-field">
                      <label htmlFor="firstName">{checkoutText.firstName}</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="checkout-row">
                    <div className="checkout-field">
                      <label htmlFor="email">{checkoutText.email}</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="checkout-field">
                      <label htmlFor="phone">{checkoutText.phone}</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="checkout-section">
                  <div className="checkout-method-row">
                    <button
                      type="button"
                      className={`checkout-method-btn${formData.deliveryType === 'delivery' ? ' selected' : ''}`}
                      onClick={() => handleDeliveryType('delivery')}
                    >
                      {checkoutText.delivery}
                    </button>
                    <button
                      type="button"
                      className={`checkout-method-btn${formData.deliveryType === 'pickup' ? ' selected' : ''}`}
                      onClick={() => handleDeliveryType('pickup')}
                    >
                      {checkoutText.pickup}
                    </button>
                  </div>
                  {formData.deliveryType === 'delivery' && (
                    <div className="checkout-row address-city-row">
                      <div className="checkout-field city">
                        <label htmlFor="city">{checkoutText.city}</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                      </div>
                      <div className="checkout-field">
                        <label htmlFor="address">{checkoutText.address}</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                      </div>
                    </div>
                  )}
                  {formData.deliveryType === 'pickup' && (
                    <div className="checkout-pickup-message">
                      Your order will be waiting for you at {business.address}
                    </div>
                  )}
                </div>
              )}
              {step === 3 && (
                <div className="checkout-section">
                  <div className="checkout-method-row">
                    <button
                      type="button"
                      className={`checkout-method-btn${formData.paymentMethod === 'bank' ? ' selected' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'bank' }))}
                    >
                      {checkoutText.creditCard}
                    </button>
                    <button
                      type="button"
                      className={`checkout-method-btn${formData.paymentMethod === 'cash' ? ' selected' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cash' }))}
                    >
                      {checkoutText.cashOnDelivery}
                    </button>
                  </div>
                  {formData.paymentMethod === 'bank' && (
                    <div className="checkout-bank-buttons">
                      {['Swedbank', 'SEB', 'LHV', 'Coop Pank'].map(bank => (
                        <button
                          type="button"
                          key={bank}
                          className={`bank-btn${selectedBank === bank ? ' selected' : ''}`}
                          onClick={() => setSelectedBank(bank)}
                        >
                          {bank}
                        </button>
                      ))}
                    </div>
                  )}
                  {formData.paymentMethod === 'cash' && (
                    <div className="checkout-bank-buttons">
                      <button
                        type="button"
                        className="bank-btn selected bank-btn-disabled"
                        disabled
                      >
                        Cash
                      </button>
                    </div>
                  )}
                  {!couponApplied ? (
                    <form
                      className="checkout-coupon-form"
                      autoComplete="off"
                      onSubmit={handleApplyCoupon}
                    >
                      <input
                        id="coupon"
                        type="text"
                        value={coupon}
                        onChange={e => {
                          setCoupon(e.target.value)
                          setCouponApplied(false)
                          setCouponError('')
                          setDiscount(0)
                        }}
                        placeholder={checkoutText.couponPlaceholder}
                        className="checkout-coupon-input"
                        disabled={couponApplied}
                      />
                      <button
                        type="submit"
                        className="checkout-coupon-btn"
                        disabled={couponApplied}
                      >
                        {checkoutText.couponApply}
                      </button>
                    </form>
                  ) : (
                    <div className="checkout-coupon-success-bill">
                      -{couponCodeDiscount}% {checkoutText.couponSuccess}
                    </div>
                  )}
                  {couponError && (
                    <div className="checkout-coupon-error">
                      {couponError}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="checkout-step-actions">
              {step > 1 && (
                <button
                  type="button"
                  className="checkout-submit-btn secondary"
                  onClick={handleBack}
                >
                  {BUTTON_TEXT[lang]?.back || 'Previous'}
                </button>
              )}
              <button
                type="button"
                className="checkout-submit-btn"
                onClick={step === 3 ? handleSubmit : handleNext}
              >
                {step === 3 ? BUTTON_TEXT[lang]?.placeOrder || 'Place Order' : BUTTON_TEXT[lang]?.next || 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout


