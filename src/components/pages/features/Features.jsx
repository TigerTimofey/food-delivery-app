import React, { useRef, useState, useEffect } from 'react'
import './Features.css'
import { PRODUCTS_TEXT, CATEGORY_ITEMS_TEXT, CATEGORY_KEYS, BUTTON_TEXT } from '../../../data/languages'
import { PRODUCTS } from '../../../data/products-data'
import { useLocation } from 'react-router-dom'
import ProdModal from './prod-modal/prodModal'

function CategorySlider({ title, img, items, sectionRef, buttonText, onDetails, onAddToCart }) {
  const cardsInnerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  
  // Add local state for counters
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

  // If items can change, sync counters length
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
            src="/backgrounds/text-effect.png"
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
                      e.stopPropagation(); // Prevent card click when clicking add button
                      
                      // Calculate total amount
                      const quantity = counters[idx];
                      const price = parseFloat(item.price);
                      const totalAmount = quantity * price;
                      
                      // Console log the total amount
                      console.log(`Total amount: ${totalAmount.toFixed(2)} € (${quantity} x ${price} €)`);
                      
                      // Add to cart
                      if (onAddToCart) {
                        onAddToCart({
                          title: item.title,
                          desc: item.desc,
                          price: price,
                          img: img
                        }, quantity);
                      }
                      
                      // Reset counter to 1
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
      {PRODUCTS.map((cat, idx) => {
        const key = CATEGORY_KEYS[idx]
        const items = CATEGORY_ITEMS_TEXT[lang]?.[key] || CATEGORY_ITEMS_TEXT.en[key]
        const title = categoriesLangArr[idx]?.title || ''
        return (
          <CategorySlider
            key={key}
            title={title}
            img={cat.img}
            items={items}
            sectionRef={categoryRefs.current[idx]}
            buttonText={buttonText}
            onDetails={setModalData}
            onAddToCart={onAddToCart}
          />
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
