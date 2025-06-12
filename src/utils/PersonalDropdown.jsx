import React, { useState, useRef, useEffect } from 'react'
import './PersonalDropdown.css'

const LANGUAGES = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'et', label: 'EE', flag: '🇪🇪' }
]

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
        {words.languages}
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
              <span role="img" aria-label={l.label} style={{ marginRight: 8 }}>{l.flag}</span>
              {l.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PersonalDropdown
