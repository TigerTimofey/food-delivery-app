import React, { useRef, useState, useEffect } from 'react'
import './Features.css'
import { PRODUCTS_TEXT, CATEGORY_ITEMS_TEXT } from '../../../data/languages'
import { PRODUCTS } from '../../../data/products-data'
import { useLocation } from 'react-router-dom'


// Helper to map category index to key
const CATEGORY_KEYS = ['burgers', 'soups', 'woks', 'desserts', 'drinks', 'hot_drinks']

function CategorySlider({ title, img, items, sectionRef }) {
  const cardsInnerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

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

  return (
    <section className="features-products-section" ref={sectionRef}>
      <div className="features-products-header">
        <h2 className="features-title">{title}</h2>
      </div>
      <div className="features-cards-scroll-container">
        <div className="features-cards-scroll-inner" ref={cardsInnerRef}>
          {items.map((item, idx) => (
            <div className="features-card-scroll" key={idx}>
              <div className="features-card-img-wrap">
                <img src={img} alt={item.title} className="features-card-img" />
              </div>
              <div className="features-card-content">
                <h3 className="features-card-title">{item.title}</h3>
                <p className="features-card-desc">{item.desc}</p>
                <a className="features-card-link" href="#" target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
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

function Features({ lang = 'en' }) {
  const categoriesLangArr = PRODUCTS_TEXT[lang] || PRODUCTS_TEXT.en
  const location = useLocation()
  const categoryRefs = useRef(PRODUCTS.map(() => React.createRef()))

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
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
          />
        )
      })}
    </div>
  )
}

export default Features
