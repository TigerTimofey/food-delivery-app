import React, { useRef, useState, useEffect } from 'react'
import './Features.css'
import { PRODUCTS_TEXT, CATEGORY_ITEMS_TEXT, CATEGORY_KEYS, BUTTON_TEXT } from '../../../data/languages'
import { PRODUCTS } from '../../../data/products-data'
import { useLocation } from 'react-router-dom'
import ProdModal from './prod-modal/prodModal'

function CategorySlider({ title, img, items, sectionRef, buttonText, onDetails }) {
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
            <div className="features-card-scroll" key={idx}>
              <div className="features-card-img-wrap">
                <img src={img} alt={item.title} className="features-card-img" />
              </div>
              <div className="features-card-content">
                <h3 className="features-card-title">{item.title}</h3>
                <p className="features-card-desc">{item.desc}</p>
                <div className="features-card-actions">
                  <button
                    className="features-card-link"
                    type="button"
                    onClick={() => onDetails({ ...item, img })}
                  >
                    {buttonText.details}
                  </button>
                  <button
                    className="features-card-add-btn"
                    type="button"
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

function Features({ lang = 'en' }) {
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
          />
        )
      })}
      {modalData && (
        <ProdModal
          open={!!modalData}
          data={modalData}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  )
}

export default Features
