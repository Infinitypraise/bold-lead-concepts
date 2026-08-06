import './App.css'
import { Link } from 'react-router-dom'

export default function Services(){
  return (
    <div className="detail-page">
      <h1>Services</h1>
      <p>
        Our services are designed to help entrepreneurs at every stage — from early microbusinesses
        to small enterprises preparing to scale. We blend financial access with practical
        business support so clients can apply learning immediately.
      </p>

      <h2>Microfinance & credit</h2>
      <p>
        We provide small, short-term loans with transparent terms and group-lending options
        to reduce risk and increase repayment rates. Loans are paired with compulsory
        financial literacy sessions to maximise impact.
      </p>

      <h2>Advisory & business setup</h2>
      <p>
        Our advisors help entrepreneurs register their businesses, create simple business
        plans, set pricing, and prepare for market expansion. We also connect businesses
        to suppliers and local market opportunities.
      </p>

      <h2>Training & capacity building</h2>
      <p>
        Practical training includes bookkeeping basics, customer service, inventory
        management, and vocational skills aligned to market demand. Participants receive
        certificates and follow-up mentorship.
      </p>

      <Link to="/" className="back-link">Back to home</Link>
    </div>
  )
}
