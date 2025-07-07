import './About.css'
import { BUSINESS_DATA } from '../../../data/bussines-data'
import { TEAM_SECTION_TEXT } from '../../../data/languages'
import BookingForm from './BookingForm'

function About({ lang = 'en' }) {
  const business = BUSINESS_DATA[0]
  const teamText = TEAM_SECTION_TEXT[lang] || TEAM_SECTION_TEXT.en

  return (
    <div className="about-container">
      <div className="about-main-row">
        <div className="about-business-col">
          <h1>{business.brandName}</h1>
          <div className="about-business-info">
            <p>
              <strong>{business.bussinessName}</strong><br />
              {business.address}<br />
              {business.email}<br />
              {business.number}
            </p>
            {/* Links removed */}
          </div>
        </div>
        <BookingForm />
      </div>
      <div className="about-team-section">
        <h2>{teamText.eyebrow}</h2>
        <div className="about-team-row">
          {teamText.members.map((member, idx) => (
            <div className="about-team-col" key={idx}>
              <div className="about-team-card">
                <img src={member.img} alt={member.name} className="about-team-img" />
                <div className="about-team-name">{member.name}</div>
                <div className="about-team-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-map-bottom">
        <iframe
          title="Google Map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
          width="100%"
          height="340"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default About
