import React, { useEffect } from 'react'
import './Home.css'
import { HOME_TEXT, PRODUCTS_SECTION_TEXT, PRODUCTS_TEXT } from '../../../data/languages'
import img2 from '/img4.avif'
import { PRODUCTS } from '../../../data/products-data'

function Home({ lang }) {
  const text = HOME_TEXT[lang] || HOME_TEXT.en
  const productsText = PRODUCTS_SECTION_TEXT[lang] || PRODUCTS_SECTION_TEXT.en
  const productsLangArr = PRODUCTS_TEXT[lang] || PRODUCTS_TEXT.en

  // Hide navbar on scroll down (mobile only)
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

  return (
    <section className="home-container">
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
      {/* --- Our services section --- */}
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
                  const cardWidth = card ? card.offsetWidth + 40 : 380 // 40px gap
                  el.scrollBy({ left: -cardWidth, behavior: 'smooth' })
                }}
              >
                &#8592;
              </button>
              <button
                className="home-cards-arrow home-cards-arrow-right"
                aria-label="Scroll right"
                type="button"
                onClick={() => {
                  const el = document.querySelector('.home-cards-inner')
                  if (!el) return
                  const card = el.querySelector('.home-card')
                  const cardWidth = card ? card.offsetWidth + 40 : 380 // 40px gap
                  el.scrollBy({ left: cardWidth, behavior: 'smooth' })
                }}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* --- end Our services section --- */}
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
    </section>
  )
}

export default Home
