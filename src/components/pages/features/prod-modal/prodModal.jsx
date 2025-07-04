import React, { useEffect, useState } from 'react'
import './prodModal.css'

function ProdModal({ open, data, onClose, onAddToCart, buttonText }) {
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      setCounter(1)
    }
  }, [open])

  const handleCounter = (delta) => {
    setCounter(prev => Math.max(1, prev + delta))
  }

  const handleAddToCart = () => {
    if (onAddToCart && data) {
      onAddToCart({
        title: data.title,
        desc: data.desc,
        price: parseFloat(data.price),
        img: data.img
      }, counter)
      
      setCounter(1)
      onClose()
    }
  }

  if (!open) return null

  return (
    <div className="prod-modal-backdrop" onClick={onClose} tabIndex={-1}>
      <div className="prod-modal" onClick={e => e.stopPropagation()} tabIndex={0} role="dialog" aria-modal="true">
        <button className="prod-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <div className="prod-modal-img-full-wrap">
          <img src={data.img} alt={data.title} className="prod-modal-img-full" />
        </div>
        <div className="prod-modal-content">
          <div className="prod-modal-header">
            <h2 className="prod-modal-title">{data.title}</h2>
            {data.price && (
              <span className="prod-modal-price">{data.price} €</span>
            )}
          </div>
          <p className="prod-modal-desc">{data.desc}</p>
          <div className="prod-modal-actions">
            <div className="prod-modal-counter">
              <button
                type="button"
                className="prod-modal-counter-btn"
                aria-label="Decrease"
                onClick={() => handleCounter(-1)}
              >
                -
              </button>
              <span className="prod-modal-counter-value">{counter}</span>
              <button
                type="button"
                className="prod-modal-counter-btn"
                aria-label="Increase"
                onClick={() => handleCounter(1)}
              >
                +
              </button>
            </div>
            <button
              className="prod-modal-add-btn"
              type="button"
              onClick={handleAddToCart}
              autoFocus
            >
              {buttonText?.add || 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdModal
