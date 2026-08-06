import './App.css'
import { Link } from 'react-router-dom'

export default function Partners(){
  return (
    <div className="detail-page">
      <h1>Partners</h1>
      <p>
        Partnerships allow us to extend services, pool resources, and design programmes that reach more
        entrepreneurs. We work with a range of organisations to cover financing, technical support,
        and certification for training.
      </p>

      <h2>Typical partners</h2>
      <ul>
        <li>Government and regulatory bodies focused on SME development and informal sector support.</li>
        <li>Financial institutions and impact investors providing capital and loan guarantees.</li>
        <li>Training organisations and certification bodies for accredited skills delivery.</li>
        <li>Local NGOs and community groups facilitating outreach and participant selection.</li>
      </ul>

      <h2>How we partner</h2>
      <p>We co-design programmes, share monitoring data, and agree on clear roles so partnerships are accountable and effective.</p>

      <Link to="/" className="back-link">Back to home</Link>
    </div>
  )
}
