import './App.css'
import vision from './image3.jpeg'
import { Link } from 'react-router-dom'

const pillars = [
  { title: 'Financial Inclusion', text: 'Accessible microloans and support.' },
  { title: 'Business Consultancy', text: 'Practical planning and advisory services.' },
  { title: 'Training & Skills', text: 'Hands-on entrepreneurship and vocational training.' },
];

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero__content">
          <h1 className="eyebrow">Bold Lead Concepts</h1>
          <h2>Empowering grassroots entrepreneurs to build thriving businesses.</h2>
          <p className="hero__text">
            We bridge ambition and opportunity through capital, consultancy, and practical training.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="button button--primary">Get in touch</a>
            <Link to="/about" className="button button--secondary">About Us</Link>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section__header">
            <p className="eyebrow">About us</p>
            <h2>Built to turn ideas into sustainable livelihoods.</h2>
          </div>
          <p>
            Bold Lead Concepts supports traders and small businesses with capital, guidance, and practical training designed for everyday market realities. We focus on simple, measurable interventions that help entrepreneurs stabilise income, improve record-keeping, and make better pricing and inventory decisions.
          </p>
          <Link to="/about" className="read-more">Read more</Link>
        </section>

        <section className="vision-mission" aria-label="Vision and mission statements">
          <div className="vision-mission__card">
            <div className='vimimg'> <img src={vision} alt='vision-image'/> </div>
            <div>
              <h3>Vision & Mission</h3>
              <p>
                Our vision is grassroots economic empowerment where everyday entrepreneurs have the tools,
                capital, and networks to build resilient livelihoods. The mission is to bridge ambition and opportunity
                by delivering locally appropriate finance, hands-on training, and advisory support that can be
                put into practice immediately.
              </p>
              <Link to="/vision-mission" className="read-more">Read more</Link>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="section__header">
            <p className="eyebrow">What we do</p>
            <h2>Three pillars for business empowerment.</h2>
          </div>
          <div className="card-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <Link to="/services" className="read-more">Read more</Link>
        </section>

        <section id="values" className="section">
          <div className="section__header">
            <p className="eyebrow">Our values</p>
            <h2>Accessibility, integrity, and empowerment.</h2>
          </div>
          <p>
            We prioritise practical access, transparent support, and capability-building so participants
            leave programmes with clearer records, repeatable practices, and improved customer relationships.
          </p>
          <Link to="/values" className="read-more">Read more</Link>
        </section>

        <section id="partners" className="section section--alt">
          <div className="section__header">
            <p className="eyebrow">Who we partner with</p>
            <h2>Partners that expand our reach.</h2>
          </div>
          <p>
            We work with traders, small businesses, government agencies, financiers, and NGOs to
            co-design initiatives that reach people where they trade. Partnerships help us combine
            financing with technical assistance and local outreach for higher impact.
          </p>
          <Link to="/partners" className="read-more">Read more</Link>
        </section>
      </main>
    </div>
  )
}

export default LandingPage;