import './App.css'
import { Link } from 'react-router-dom'

export default function Values(){
  return (
    <div className="detail-page">
      <h1>Our values</h1>
      <p>
        Our values inform how we design programmes, select partners, and measure success.
        They are simple and practical, reflecting the needs of the communities we serve.
      </p>
      <h2>Accessibility</h2>
      <p>We deliver services close to where people work, remove unnecessary barriers, and keep eligibility simple.</p>

      <h2>Integrity</h2>
      <p>We operate with transparent terms, clear pricing, and accountable reporting so beneficiaries and partners trust our work.</p>

      <h2>Empowerment</h2>
      <p>We emphasise capability-building so entrepreneurs can make decisions independently and grow sustainably.</p>

      <Link to="/" className="back-link">Back to home</Link>
    </div>
  )
}
