import './App.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="detail-page">
      <h1>About Bold Lead Concepts</h1>
      <p>
        Bold Lead Concepts is a Lagos-based enterprise development company registered with the Corporate Affairs Commission (CAC).
        For more than a decade we have worked directly with market traders, petty traders, and small-scale entrepreneurs to
        co-design interventions that are pragmatic, low-cost, and reachable. Our work combines small-scale finance with
        practical business advisory and vocational training so participants can apply new skills the same day they learn them.
      </p>

      <h2>What we do in communities</h2>
      <p>
        We run community-facing programmes such as group lending circles, market-based training workshops, and business
        clinics where entrepreneurs receive targeted mentoring on business registration, simple bookkeeping, pricing strategy,
        and supplier relationships. Programmes are typically delivered on market days, in local community centres, and through
        partnerships with existing associations to reduce friction and improve uptake.
      </p>

      <h2>Program design and evidence</h2>
      <p>
        Each programme is designed with clear, measurable outcomes: increased daily sales, improved record-keeping, and the
        ability to access follow-on finance. We run baseline and endline checks and use short-cycle monitoring to adjust
        content, ensuring the training focuses on behaviours that change business results.
      </p>

      <h2>Who benefits</h2>
      <p>
        Our typical participants are market stall owners, petty traders, artisan entrepreneurs, and small shopkeepers who
        need practical, affordable support to stabilise and grow their revenue. We also support early-stage small businesses
        preparing to formalise operations or expand into nearby markets.
      </p>

      <Link to="/" className="back-link">Back to home</Link>
    </div>
  )
}
