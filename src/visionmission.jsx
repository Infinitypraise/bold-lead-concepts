import './App.css'
import { Link } from 'react-router-dom'

export default function VisionMission(){
	return (
		<div className="detail-page vision-mission-detail">
			<h1>Vision</h1>
			<p>
				To be the leading catalyst for grassroots economic empowerment in Nigeria, enabling everyday entrepreneurs to
				build sustainable livelihoods and create intergenerational opportunity. We envision local markets where small
				businesses operate profitably, keep reliable records, and have access to fair finance and supply chains.
			</p>

			<h2>Mission</h2>
			<p>
				Bold Lead Concepts exists to bridge the gap between ambition and opportunity for traders and small business owners.
				We do this by delivering locally appropriate finance, hands-on vocational training, and tailored advisory support
				that respects both the time constraints and the cash-flow realities of informal businesses.
			</p>

			<h2>Strategic priorities</h2>
			<ul>
				<li>Design simple, predictable credit products that match the cash cycles of microbusinesses.</li>
				<li>Deliver modular, practical training focused on bookkeeping, pricing, customer service, and inventory control.</li>
				<li>Scale through partnerships with local associations, NGOs, and government to increase reach responsibly.</li>
				<li>Measure outcomes to iterate on programme design and ensure real value for participants and partners.</li>
			</ul>

			<h2>Measuring impact</h2>
			<p>
				We track short-term and medium-term indicators such as increases in weekly revenue, adoption of basic bookkeeping,
				repayment performance on group loans, and the number of enterprises that formalise or expand their operations within a year.
				These metrics inform continuous improvement and help us report concrete results to stakeholders.
			</p>

			<Link to="/" className="back-link">Back to home</Link>
		</div>
	)
}
