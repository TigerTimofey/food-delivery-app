import { useEffect, useState } from 'react'
import './SuccesMessage.css'

function SuccesMessage({ message = '', open = false, onClose }) {
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    setVisible(open)
    if (open) {
      const timer = setTimeout(() => {
        setVisible(false)
        if (onClose) onClose()
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [open, onClose])

  if (!visible) return null

  return (
    <div className="success-message-popup">
      {message}
    </div>
  )
}

export default SuccesMessage
