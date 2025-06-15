import React, { useState, useEffect } from 'react'
import './Features.css'
import { MIDNIGHT_DEALS_TEXT } from '../../../data/languages'

const sliderImages = [
  {
    img: "/img1.avif",
    href: "/uued_tooted_l",
    alt: "Uuendused"
  },
  {
    img: "/img4.avif",
    href: "/superpakkumine_l",
    alt: "Sooduskomplektid"
  }
]

function Features({ lang = 'en' }) {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setSlide(s => (s + 1) % sliderImages.length), 7000)
    return () => clearTimeout(timer)
  }, [slide])

  const text = MIDNIGHT_DEALS_TEXT[lang] || MIDNIGHT_DEALS_TEXT.en

  return (
    <div className="features-container" style={{ marginTop: "4rem" }}>
      {/* Midnight Deals Section */}
      <section className="midnight-sec midnight-sec--features">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="midnight-content">
              <div className="heading">
                <p className="eyebrow-2">{text.eyebrow}</p>
                <h3 className="title-3 mb-32">
                  {text.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < text.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
              <div className="midnight-deals-list">
                {text.items.map((item, idx) => (
                  <div className="burgers" key={idx}>
                    <h6>{item}</h6>
                  </div>
                ))}
              </div>
              <a
                href="shop-grid-right-sidebar.html"
                className="cus-btn dark midnight-order-btn"
              >
                <span className="btn-content">
                  {text.button}
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
      SECTION 3
    </div>
  )
}

export default Features
