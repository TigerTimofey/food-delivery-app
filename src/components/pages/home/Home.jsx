import React, { useEffect, useState, useRef } from 'react'
import './Home.css'
import { HOME_TEXT, PRODUCTS_SECTION_TEXT, PRODUCTS_TEXT, TEAM_SECTION_TEXT, MIDNIGHT_DEALS_TEXT } from '../../../data/languages'
// import img2 from '/img4.avif'
import { PRODUCTS } from '../../../data/products-data'
import { useNavigate } from 'react-router-dom'

function Home({ lang }) {
  const text = HOME_TEXT[lang] || HOME_TEXT.en
  const productsText = PRODUCTS_SECTION_TEXT[lang] || PRODUCTS_SECTION_TEXT.en
  const productsLangArr = PRODUCTS_TEXT[lang] || PRODUCTS_TEXT.en
  const teamText = TEAM_SECTION_TEXT[lang] || TEAM_SECTION_TEXT.en
  const midnightText = MIDNIGHT_DEALS_TEXT[lang] || MIDNIGHT_DEALS_TEXT.en
  const [showScrollTop, setShowScrollTop] = useState(false)
  const bottomRef = useRef(null)
  const navigate = useNavigate()

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
        <div className="home-title-effect-wrap">
          <h1 className="home-title">{text.title}</h1>
          <img
            src="/backgrounds/text-effect.png"
            alt=""
            className="home-title-effect-img"
          />
        </div>
        <div className="home-subtitle">
          {text.subtitle}
        </div>
        <div className="home-desc">
          {text.desc}
        </div>
      </div>
      <section className="home-img-section">
        {/* <img src={img2} alt="offer card" className="home-img-full" /> */}
      </section>

      {/* Midnight Deals Section - moved from Features */}
      <section className="midnight-sec midnight-sec--features">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="midnight-content">
              <div className="heading">
                <p className="eyebrow-2">{midnightText.eyebrow}</p>
                <h3 className="title-3">
                  {midnightText.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < midnightText.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
              <div className="midnight-deals-list">
                {midnightText.items.map((item, idx) => (
                  <div className="burgers" key={idx}>
                    <h6>{item}</h6>
                  </div>
                ))}
              </div>
              <a
                href="/features"
                className="cus-btn dark midnight-order-btn"
              >
                <span className="btn-content">
                  {midnightText.button}
                  <span className="arrow-anim">&rarr;</span>
                </span>
              </a>
            </div>
            <div className="midnight-banner-img-wrap">
              <img src="/backgrounds/offer.png" alt="" className="title-bg-vec" />
            </div>
          </div>
        </div>
      </section>

      {/* Desc & Buttons Product Section */}
      <section className="home-services-section">
        <div className="rt-ContainerInner">
          <div className="home-services-content">
            <div className="home-title-effect-wrap home-title-effect-wrap--products">
              <h2 className="home-title" style={{ whiteSpace: 'pre-line' }}>{productsText.title}</h2>
              <img
                src="/backgrounds/text-effect.png"
                alt=""
                className="home-title-effect-img home-title-effect-img--products"
              />
            </div>
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

      

      {/* Cards Product Section */}
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

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <div className="team-heading">
              <p className="team-eyebrow">{teamText.eyebrow}</p>
              <h3 className="team-title" dangerouslySetInnerHTML={{ __html: teamText.title }} />
            </div>
            <button
              type="button"
              className="team-btn-main"
              onClick={() => navigate('/about')}
            >
              <span className="btn-content">
                <span className="team-title-highlight">{teamText.button}</span>
                        <span className="arrow-anim">&rarr;</span>
              </span>
            </button>
          </div>
          <div className="team-row">
            {teamText.members.map((member, idx) => (
              <div className="team-col" key={idx}>
                <div className="team-card">
                  <p  className="team-img-block">
                    <img src={member.img} alt={member.name} />
                  </p>
                  <span className="team-member-name">{member.name}</span>
                  <p className="team-member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
