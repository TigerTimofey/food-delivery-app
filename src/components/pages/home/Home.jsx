import React from 'react'
import './Home.css'
import { HOME_TEXT } from '../../../data/languages'
import img2 from '/img4.avif'

function Home({ lang }) {
  const text = HOME_TEXT[lang] || HOME_TEXT.en
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
    </section>
  )
}

export default Home
