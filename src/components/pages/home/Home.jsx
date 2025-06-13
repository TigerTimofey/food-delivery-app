import React from 'react'
import './Home.css'
import { HOME_TEXT } from '../../../data/languages'

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
    </section>
  )
}

export default Home
