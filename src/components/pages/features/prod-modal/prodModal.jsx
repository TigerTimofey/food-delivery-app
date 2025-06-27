import React, { useEffect } from 'react'
import './prodModal.css'

function ProdModal({ open, data, onClose }) {
  // Trap focus and close on ESC
  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="prod-modal-backdrop" onClick={onClose} tabIndex={-1}>
      <div className="prod-modal" onClick={e => e.stopPropagation()} tabIndex={0} role="dialog" aria-modal="true">
        <button className="prod-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <div className="prod-modal-img-full-wrap">
          <img src={data.img} alt={data.title} className="prod-modal-img-full" />
        </div>
        <div className="prod-modal-content">
          <h2 className="prod-modal-title">{data.title}</h2>
          <p className="prod-modal-desc">{data.desc}</p>
          {/* Example: Add more info here if needed */}
          <div className="prod-modal-actions">
            <button
              className="prod-modal-add-btn"
              type="button"
              autoFocus
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdModal
