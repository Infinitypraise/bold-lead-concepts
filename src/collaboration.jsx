import './App.css'
import { Link } from 'react-router-dom'

export default function Collaboration(){
  return (
    <div className="detail-page">
      <h1>Open to collaboration</h1>

      <p>
        Bold Lead Concepts is always open to partnerships that expand our reach and deepen our impact. We welcome
        conversations with organisations interested in practical, scalable collaborations focused on grassroots
        economic empowerment.
      </p>

      <h2>We welcome conversations with</h2>
      <ul className="value-list">
        <li><strong>Financial institutions and impact investors:</strong> organisations interested in co-funding or scaling our business support operations, blending capital with programmatic support.</li>
        <li><strong>Development agencies and NGOs:</strong> partners working in financial inclusion, SME development, or skills training who can help reach underserved communities.</li>
        <li><strong>Corporate organisations (CSR):</strong> companies seeking CSR partnerships that deliver measurable economic benefits to communities.</li>
        <li><strong>Training providers and certification bodies:</strong> institutions looking to extend accredited programmes to informal markets and vocational cohorts.</li>
        <li><strong>Government bodies:</strong> agencies driving entrepreneurship and MSME development initiatives that align with local economic planning.</li>
      </ul>

      <h2>How we partner</h2>
      <p>
        Typical partnership models include co-funded pilots, technical assistance on programme design, training delivery partnerships,
        and shared monitoring and evaluation. We design clear roles and success metrics up front so collaborations are accountable
        and focused on measurable outcomes.
      </p>

      <p>
        If your organisation shares our commitment to grassroots economic empowerment, please get in touch so we can explore opportunities.
      </p>

      <Link to="/" className="back-link">Back to home</Link>
    </div>
  )
}
