import { useState } from 'react'
import './BookingForm.css'
import { BUSINESS_DATA } from '../../../data/bussines-data'
import languages from '../../../data/languages'
import SuccesMessage from '../../../utils/success-message/SuccesMessage'

function getWorkingHoursForDate(dateStr) {
  if (!dateStr) return null
  const business = BUSINESS_DATA[0]
  const d = new Date(dateStr)
  const jsDay = d.getDay() 
  const arrIdx = jsDay === 0 ? 6 : jsDay - 1
  return business.workingHours[arrIdx]
}

function generateTimeSlots(open, close, interval = 30) {
  if (!open || !close) return []
  const [openH, openM] = open.split(':').map(Number)
  const [closeH, closeM] = close.split(':').map(Number)
  const slots = []
  let d = new Date()
  d.setHours(openH, openM, 0, 0)
  const end = new Date()
  end.setHours(closeH, closeM, 0, 0)
  while (d <= end) {
    slots.push(d.toTimeString().slice(0,5))
    d = new Date(d.getTime() + interval * 60000)
  }
  return slots
}

function getNextNDates(n = 14) {
  const arr = []
  const today = new Date()
  for (let i = 0; i < n; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    arr.push(d)
  }
  return arr
}

function formatDateValue(date) {
  return date.toISOString().slice(0, 10)
}

function BookingForm({ lang = 'en' }) {
  const TEXT = languages[lang]?.bookingForm || languages.en.bookingForm

  const locale = lang === 'et' ? 'et-EE' : 'en-US'

  function formatDateOption(date) {
    return date.toLocaleDateString(locale, {
      weekday: 'short',
      day: '2-digit',
      month: 'short'
    })
  }

  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: 1 })
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [, setTouched] = useState({})

  const dateOptions = getNextNDates(14)
  const workingHours = getWorkingHoursForDate(form.date)
  const timeSlots = workingHours ? generateTimeSlots(workingHours.open, workingHours.close) : []

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({
      ...f,
      [name]: name === 'guests' ? Math.max(1, Number(value)) : value,
      ...(name === 'date' ? { time: '' } : {}) 
    }))
    setTouched(t => ({ ...t, [name]: true }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Booking submitted:', form)
    setSubmitted(true)
    setShowSuccess(true)
    setTimeout(() => setSubmitted(false), 2500)
    setForm({ name: '', email: '', date: '', time: '', guests: 1 })
    setTouched({})
  }

  let hoursInfo = ''
  if (form.date && !workingHours) {
    hoursInfo = TEXT.closed
  }

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <h3 className="booking-form-title">{TEXT.title}</h3>
        <div className="booking-form-row">
          <input
            type="text"
            name="name"
            placeholder={TEXT.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={TEXT.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="booking-form-row">
          <select
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          >
            <option value="">{TEXT.datePlaceholder}</option>
            {dateOptions.map(d => (
              <option key={formatDateValue(d)} value={formatDateValue(d)}>
                {formatDateOption(d)}
              </option>
            ))}
          </select>
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            disabled={!form.date || !workingHours || timeSlots.length === 0}
          >
            <option value="">
              {form.date
                ? (workingHours && timeSlots.length > 0
                    ? TEXT.timePlaceholder
                    : TEXT.closed)
                : TEXT.selectDateFirst}
            </option>
            {timeSlots.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <input
            type="number"
            name="guests"
            min="1"
            max="20"
            value={form.guests}
            onChange={handleChange}
            required
            placeholder={TEXT.guestsPlaceholder}
          />
        </div>
        {/* Only show "Closed" if not working */}
        {form.date && !workingHours && (
          <div className="booking-form-hours">
            {hoursInfo}
          </div>
        )}
        <button className="booking-form-btn" type="submit" disabled={submitted}>
          {submitted ? TEXT.booked : TEXT.bookNow}
        </button>
        {/* Remove inline success message */}
      </form>
      <SuccesMessage
        message={TEXT.success}
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  )
}

export default BookingForm
