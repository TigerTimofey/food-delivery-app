import React, { useRef, useState, useEffect } from 'react'
import './Features.css'
import {
  PRODUCTS_TEXT,
  CATEGORY_ITEMS_TEXT,
  CATEGORY_KEYS,
  BUTTON_TEXT,
  DISCOUNT_SECTION_TEXT,
  MIDNIGHT_DEALS_TEXT,
  FEATURES_INTRO_TOGGLE_LABELS,
  FEATURES_INTRO_START_ORDER_LABEL // <-- add this import
} from '../../../data/languages'
import { PRODUCTS } from '../../../data/products-data'
import { useLocation } from 'react-router-dom'
import ProdModal from './prod-modal/prodModal'


function FeaturesIntroSection({ lang = 'en' }) {
  // All text is now from languages.js
  const midnightText = MIDNIGHT_DEALS_TEXT[lang] || MIDNIGHT_DEALS_TEXT.en
  const discountText = DISCOUNT_SECTION_TEXT[lang] || DISCOUNT_SECTION_TEXT.en
  const toggleLabels = FEATURES_INTRO_TOGGLE_LABELS[lang] || FEATURES_INTRO_TOGGLE_LABELS.en
  const [discountEmail, setDiscountEmail] = useState('')
  const [discountSubmitted, setDiscountSubmitted] = useState(false)
  const itemDescriptions = midnightText.itemDescriptions || []
  const firstCategoryRef = useRef(null)
  const startOrderLabel = FEATURES_INTRO_START_ORDER_LABEL[lang] || FEATURES_INTRO_START_ORDER_LABEL.en

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__featuresFirstCategoryRef = firstCategoryRef
    }
  }, [])


  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    function handleScroll() {
      if (expanded && window.scrollY > 40) setExpanded(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [expanded])

  return (
    <section className={`features-intro-section samurai-deals-intro${expanded ? ' expanded' : ' collapsed'}`}>
      {/* Toggle line/button, always visible */}
      <div
        className="features-intro-toggle"
        tabIndex={0}
        role="button"
        aria-label={expanded ? toggleLabels.hide : toggleLabels.show}
        onClick={() => setExpanded(e => !e)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') setExpanded(v => !v)
        }}
      >
        <span className="features-intro-toggle-label">
          {expanded ? toggleLabels.hide : toggleLabels.show}
        </span>
      </div>
      <div className="features-intro-section-inner">
        <div className="samurai-deals-header">
          <div className="features-title-effect-wrap">
            <h1 className="samurai-deals-title">
              {/* Title from languages.js */}
              {midnightText.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < midnightText.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <img
              src="images/backgrounds/text-effect.png"
              alt=""
              className="features-title-effect-img"
            />
          </div>
  
        </div>
        <div className="samurai-deals-grid">
          {midnightText.items.map((item, idx) => (
            <div
              className={`features-intro-card${idx === 0 ? ' highlight' : ''}`}
              key={idx}
            >
              <div className="features-intro-icon-wrap">
                {/* Use  SVG for each card */}
                {idx === 0 ? (
                  <img src="/images/svg/mail-28.svg" alt={item} className="features-intro-icon" />
                ) : idx === 1 ? (
                  <img src="/images/svg/mobile-phone.svg" alt={item} className="features-intro-icon" />
                ) : idx === 2 ? (
                  <img src="/images/svg/motor-scooter.svg" alt={item} className="features-intro-icon" />
                ) : idx === 3 ? (
                  <img src="/images/svg/share.svg" alt={item} className="features-intro-icon" />
                ) : (
                  <img src="/images/svg/bill-line.svg" alt={item} className="features-intro-icon" />
                )}
              </div>
              <div className="features-intro-content">
                <h3 className="features-intro-title">{item}</h3>
                <p className="features-intro-desc">{itemDescriptions[idx]}</p>
                {/* Discount by code card: email form */}
                {idx === 0 && (
                  <form
                    className="discount-form features-discount-form"
                    onSubmit={e => {
                      e.preventDefault()
                      if (discountEmail.trim()) {
                        setDiscountSubmitted(true)
                        setDiscountEmail('')
                      }
                    }}
                  >
                    {!discountSubmitted && (
                      <div className="discount-form-row features-discount-form-row">
                        <input
                          type="email"
                          className="discount-input features-discount-input"
                          placeholder={discountText.placeholder}
                          value={discountEmail}
                          onChange={e => setDiscountEmail(e.target.value)}
                          required
                        />
                        <button
                          type="submit"
                          className="discount-btn features-discount-btn"
                        >
                          {discountText.button}
                        </button>
                      </div>
                    )}
                    {discountSubmitted && (
                      <div className="features-discount-success">
                        {discountText.success}
                      </div>
                    )}
                  </form>
                )}
                {/* Order via app card: store buttons */}
                {idx === 1 && (
                  <div className="features-app-buttons">
                    <a
                      href="https://apps.apple.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="features-app-btn features-app-btn--apple"
                    >
                      <span className="features-app-btn-icon">
                        <img src="/images/svg/apple-app-store.svg" alt="App Store" />
                      </span>
                    </a>
                    <a
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="features-app-btn features-app-btn--google"
                    >
                      <span className="features-app-btn-icon">
                        <img src="/images/svg/google-play-icon.svg" alt="Google Play" />
                      </span>
                    </a>
                  </div>
                )}
                {/* Fast delivery card: Start order button */}
                {idx === 2 && (
                  <button
                    type="button"
                    className="features-fastorder-btn"
                    onClick={() => {
                      setExpanded(false);
                    }}
                  >
                    {startOrderLabel}
                  </button>
                )}
                {idx === 3 && (
                  <button
                    type="button"
                    className="features-share-btn"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Check out this menu!',
                          text: 'Let’s order together and get a client card!',
                          url: window.location.origin + '/features'
                        });
                      } else {
                        window.open(window.location.origin + '/features', '_blank');
                      }
                    }}
                  >
                    <img src="/images/svg/share.svg" alt="Share" className="features-share-btn-icon" />
                    <span className="features-share-btn-text">
                      {lang === 'et' ? 'Jaga menüüd' : 'Share menu'}
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Hidden anchor for first category */}
        <div ref={firstCategoryRef} style={{ position: 'absolute', top: 0 }} />
      </div>
    </section>
  )
}

function CategorySlider({ title, img, items, sectionRef, buttonText, onDetails, onAddToCart }) {
  const cardsInnerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  
  const [counters, setCounters] = useState(() => items.map(() => 1))

  useEffect(() => {
    function updateScrollButtons() {
      const el = cardsInnerRef.current
      if (!el) return
      setCanScrollLeft(el.scrollLeft > 0)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    }
    updateScrollButtons()
    const el = cardsInnerRef.current
    if (el) {
      el.addEventListener('scroll', updateScrollButtons)
      window.addEventListener('resize', updateScrollButtons)
    }
    return () => {
      if (el) el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [])

  useEffect(() => {
    setCounters(items.map(() => 1))
  }, [items])

  const handleCounter = (idx, delta) => {
    setCounters(counters =>
      counters.map((val, i) =>
        i === idx ? Math.max(1, val + delta) : val
      )
    )
  }

  return (
    <section className="features-products-section" ref={sectionRef}>
      <div className="features-products-header">
        <div className="features-title-effect-wrap">
          <h2 className="features-title">{title}</h2>
          <img
            src="images/backgrounds/text-effect.png"
            alt=""
            className="features-title-effect-img"
          />
        </div>
      </div>
      <div className="features-cards-scroll-container">
        <div className="features-cards-scroll-inner" ref={cardsInnerRef}>
          {items.map((item, idx) => (
            <div 
              className="features-card-scroll" 
              key={idx}
              onClick={() => onDetails({ ...item, img })}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onDetails({ ...item, img });
                }
              }}
            >
              <div className="features-card-img-wrap">
                <img src={img} alt={item.title} className="features-card-img" />
              </div>
              <div className="features-card-content">
                <div className="features-card-title-row">
                  <h3 className="features-card-title">{item.title}</h3>
                  {item.price && (
                    <span className="features-card-price">{item.price} €</span>
                  )}
                </div>
                <p className="features-card-desc">{item.desc}</p>
                <div className="features-card-actions">
                  <div className="features-card-counter">
                    <button
                      type="button"
                      className="features-card-counter-btn"
                      aria-label="Decrease"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCounter(idx, -1);
                      }}
                    >
                      -
                    </button>
                    <span className="features-card-counter-value">{counters[idx]}</span>
                    <button
                      type="button"
                      className="features-card-counter-btn"
                      aria-label="Increase"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCounter(idx, 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="features-card-add-btn"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      
                      const quantity = counters[idx];
                      const price = parseFloat(item.price);
                      const totalAmount = quantity * price;
                      
                      console.log(`Total amount: ${totalAmount.toFixed(2)} € (${quantity} x ${price} €)`);
                      
                      if (onAddToCart) {
                        onAddToCart({
                          title: item.title,
                          desc: item.desc,
                          price: price,
                          img: img
                        }, quantity);
                      }
                      
                      handleCounter(idx, 1 - counters[idx]);
                    }}
                  >
                    {buttonText.add}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="features-cards-arrows-inline">
          <button
            className="features-cards-arrow features-cards-arrow-left"
            aria-label="Scroll left"
            type="button"
            onClick={() => {
              const el = cardsInnerRef.current
              if (!el) return
              const card = el.querySelector('.features-card-scroll')
              const cardWidth = card ? card.offsetWidth + 40 : 380
              el.scrollBy({ left: -cardWidth, behavior: 'smooth' })
            }}
            disabled={!canScrollLeft}
            style={{ opacity: canScrollLeft ? 1 : 0.4, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
          >
            &larr;
          </button>
          <button
            className="features-cards-arrow features-cards-arrow-right"
            aria-label="Scroll right"
            type="button"
            onClick={() => {
              const el = cardsInnerRef.current
              if (!el) return
              const card = el.querySelector('.features-card-scroll')
              const cardWidth = card ? card.offsetWidth + 40 : 380
              el.scrollBy({ left: cardWidth, behavior: 'smooth' })
            }}
            disabled={!canScrollRight}
            style={{ opacity: canScrollRight ? 1 : 0.4, pointerEvents: canScrollRight ? 'auto' : 'none' }}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}

function Features({ lang = 'en', onAddToCart }) {
  const categoriesLangArr = PRODUCTS_TEXT[lang] || PRODUCTS_TEXT.en
  const location = useLocation()
  const categoryRefs = useRef(PRODUCTS.map(() => React.createRef()))
  const buttonText = BUTTON_TEXT[lang] || BUTTON_TEXT.en

  const [modalData, setModalData] = useState(null)

  useEffect(() => {
    return () => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  useEffect(() => {
    if (location.state && typeof location.state.categoryIdx === 'number') {
      const idx = location.state.categoryIdx
      const ref = categoryRefs.current[idx]
      if (ref && ref.current) {
        const top = ref.current.getBoundingClientRect().top + window.scrollY - 60
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div className="features-container" style={{ marginTop: "4rem" }}>
      <FeaturesIntroSection lang={lang} />
     
      {PRODUCTS.map((cat, idx) => {
        const key = CATEGORY_KEYS[idx]
        const items = CATEGORY_ITEMS_TEXT[lang]?.[key] || CATEGORY_ITEMS_TEXT.en[key]
        const title = categoriesLangArr[idx]?.title || ''
        const sectionRef = idx === 0
          ? (window.__featuresFirstCategoryRef || React.createRef())
          : categoryRefs.current[idx]
        return (
          <React.Fragment key={key}>
            {idx > 0 && <hr className="features-group-divider" />}
            <CategorySlider
              title={title}
              img={cat.img}
              items={items}
              sectionRef={sectionRef}
              buttonText={buttonText}
              onDetails={setModalData}
              onAddToCart={onAddToCart}
            />
          </React.Fragment>
        )
      })}
      {modalData && (
        <ProdModal
          open={!!modalData}
          data={modalData}
          onClose={() => setModalData(null)}
          onAddToCart={onAddToCart}
          buttonText={buttonText}
        />
      )}
    </div>
  )

}

export default Features

