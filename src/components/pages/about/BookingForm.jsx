import { useState } from 'react'
import './BookingForm.css'
import { BUSINESS_DATA } from '../../../data/bussines-data'

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

function formatDateOption(date) {
  // Example: "Mon, 10 Jun"
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    day: '2-digit',
    month: 'short'
  })
}

function formatDateValue(date) {
  // yyyy-mm-dd
  return date.toISOString().slice(0, 10)
}

function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: 1 })
  const [submitted, setSubmitted] = useState(false)
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
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
    setForm({ name: '', email: '', date: '', time: '', guests: 1 })
    setTouched({})
  }

  let hoursInfo = ''
  if (form.date && !workingHours) {
    hoursInfo = 'Closed'
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3 className="booking-form-title">Book a Table</h3>
      <div className="booking-form-row">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
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
          <option value="">Select date</option>
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
                  ? 'Select time'
                  : 'Closed')
              : 'Select date first'}
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
          placeholder="Guests"
        />
      </div>
      {/* Only show "Closed" if not working */}
      {form.date && !workingHours && (
        <div className="booking-form-hours">
          {hoursInfo}
        </div>
      )}
      <button className="booking-form-btn" type="submit" disabled={submitted}>
        {submitted ? 'Booked!' : 'Book Now'}
      </button>
      {submitted && <div className="booking-form-success">Thank you! Your booking is received.</div>}
    </form>
  )
}

export default BookingForm
