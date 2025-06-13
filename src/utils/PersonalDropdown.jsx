import React, { useState, useRef, useEffect } from 'react'
import './PersonalDropdown.css'
import { LANGUAGES } from '../data/languages'

function PersonalDropdown({ lang, setLang, words }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div ref={ref} className="personal-dropdown">
      <button
        className="personal-dropdown-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Language menu"
        type="button"
      >
        <span
          className="personal-dropdown-btn-flag"
          dangerouslySetInnerHTML={{ __html: words.languages }}
        ></span>
        <span>
          {LANGUAGES.find(l => l.code === lang)?.label}
        </span>
      </button>
      {open && (
        <ul className="personal-dropdown-menu center-dropdown">
          {LANGUAGES.map(l => (
            <li
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false) }}
              className={lang === l.code ? 'active' : ''}
              style={{
                fontWeight: lang === l.code ? 'bold' : 'normal',
                background: lang === l.code ? '#f0f0f0' : undefined,
                textAlign: 'center'
              }}
            >
              <span
                aria-label={l.label}
                style={{ marginRight: 8, display: 'inline-flex', alignItems: 'center' }}
                dangerouslySetInnerHTML={{ __html: l.flag }}
              ></span>
              <span>{l.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PersonalDropdown
