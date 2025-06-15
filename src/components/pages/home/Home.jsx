import React, { useEffect, useState, useRef } from 'react'
import './Home.css'
import { HOME_TEXT, PRODUCTS_SECTION_TEXT, PRODUCTS_TEXT } from '../../../data/languages'
import img2 from '/img4.avif'
import { PRODUCTS } from '../../../data/products-data'

function Home({ lang }) {
  const text = HOME_TEXT[lang] || HOME_TEXT.en
  const productsText = PRODUCTS_SECTION_TEXT[lang] || PRODUCTS_SECTION_TEXT.en
  const productsLangArr = PRODUCTS_TEXT[lang] || PRODUCTS_TEXT.en
  const [showScrollTop, setShowScrollTop] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    const nav = document.querySelector('.navbar, nav, .main-navbar')
    if (!nav) return
    let lastScroll = window.scrollY
    let ticking = false

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY
          if (window.innerWidth <= 900) {
            if (curr > lastScroll && curr > 40) {
              nav.style.transform = 'translateY(-100%)'
              nav.style.transition = 'transform 0.3s'
            } else {
              nav.style.transform = 'translateY(0)'
              nav.style.transition = 'transform 0.3s'
            }
          } else {
            nav.style.transform = ''
            nav.style.transition = ''
          }
          lastScroll = curr
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  useEffect(() => {
    function handleScroll() {
      if (!bottomRef.current) return
      const rect = bottomRef.current.getBoundingClientRect()

      setShowScrollTop(rect.top <= window.innerHeight && rect.bottom >= 0)
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section className="home-container">

      {showScrollTop && (
        <button
          className="scroll-to-top-fab"
          aria-label="Scroll to top"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 6l-7 7h4v5h6v-5h4l-7-7z" fill="currentColor"/>
          </svg>
        </button>
      )}
      <div className="home-hero">
        <h1 className="home-title">{text.title}</h1>
        <div className="home-subtitle">
          {text.subtitle}
        </div>
        <div className="home-desc">
          {text.desc}
        </div>
      </div>
      <section className="home-img-section">
        <img src={img2} alt="Bolt car" className="home-img-full" />
      </section>

      <section className="home-services-section">
        <div className="rt-ContainerInner">
          <div className="home-services-content">
            <h2 className="home-title" style={{ whiteSpace: 'pre-line' }}>{productsText.title}</h2>
            <div className="home-services-desc">
              {productsText.desc}
            </div>
            <div className="home-services-arrows-inline">
              <button
                className="home-cards-arrow home-cards-arrow-left"
                aria-label="Scroll left"
                type="button"
                onClick={() => {
                  const el = document.querySelector('.home-cards-inner')
                  if (!el) return
                  const card = el.querySelector('.home-card')
                  const cardWidth = card ? card.offsetWidth + 40 : 380 
                  el.scrollBy({ left: -cardWidth, behavior: 'smooth' })
                }}
              >
               &larr;
              </button>
              <button
                className="home-cards-arrow home-cards-arrow-right"
                aria-label="Scroll right"
                type="button"
                onClick={() => {
                  const el = document.querySelector('.home-cards-inner')
                  if (!el) return
                  const card = el.querySelector('.home-card')
                  const cardWidth = card ? card.offsetWidth + 40 : 380 
                  el.scrollBy({ left: cardWidth, behavior: 'smooth' })
                }}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cards-section">
        <div className="home-cards-container">
          <div className="home-cards-inner">
            {PRODUCTS.map((card, idx) => {
              const langData = productsLangArr[idx] || {}
              return (
                <div className="home-card" key={idx}>
                  <div className="home-card-img-wrap">
                    <img src={card.img} alt={langData.title || ''} className="home-card-img" />
                  </div>
                  <div className="home-card-content">
                    <h3 className="home-card-title">{langData.title}</h3>
                    <p className="home-card-desc">{langData.desc}</p>
                    <a className="home-card-link" href={card.link?.href || card.href || "#"} target="_blank" rel="noopener noreferrer">
                      {langData.label}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <div ref={bottomRef} style={{ height: 1 }} />
    </section>
  )
}

export default Home
