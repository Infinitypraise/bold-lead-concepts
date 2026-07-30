import './App.css';
import Footer from './footer';
import  Header from './header';

const pillars = [
  {
    title: 'Financial Inclusion',
    text: 'Fast, accessible loans and support for petty traders and small business owners.',
  },
  {
    title: 'Business Consultancy',
    text: 'Registration, planning, and growth strategy that helps businesses scale with confidence.',
  },
  {
    title: 'Training & Skills',
    text: 'Practical entrepreneurship and vocational training that turn ambition into income.',
  },
];

function App() {
  return (
    <div className="app-shell">
      <Header />
      <header className="hero">
        <div className="hero__content">
          <h2 className="eyebrow">Bold Lead Concepts</h2>
          <h1>Empowering grassroots entrepreneurs to build thriving businesses.</h1>
          <p className="hero__text">
            We bridge ambition and opportunity through capital, consultancy, and practical training for traders and small business owners across Lagos and beyond.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="button button--primary">Get in touch</a>
            <a href="#about" className="button button--secondary">Learn more</a>
          </div>
          <div className="hero__badge">
            <span>Trusted For Growth</span>
          </div>
        </div>
      </header>

      <main>
        <section className="vision-mission" aria-label="Vision and mission statements">
          <div className="vision-mission__card">
            <h3>Vision Statement</h3>
            <p>
              To be the leading catalyst for grassroots economic empowerment in Nigeria, building a community where small traders, entrepreneurs, and businesses have the capital, skills, and guidance they need to thrive.
            </p>
          </div>
          <div className="vision-mission__card">
            <h3>Mission Statement</h3>
            <p>
              Bold Lead Concepts exists to bridge the gap between ambition and opportunity for everyday traders and entrepreneurs. We provide accessible support, hands-on business consultancy, and practical training — equipping petty traders, small business owners, and aspiring entrepreneurs across Lagos and beyond with the tools to build sustainable livelihoods and grow with confidence.
            </p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section__header">
            <p className="eyebrow">About us</p>
            <h2>Built to turn ideas into sustainable livelihoods.</h2>
          </div>
          <p>
            Bold Lead Concepts is a Lagos-based enterprise development company registered with the Corporate Affairs Commission (CAC). We believe that access to capital, knowledge, and guidance can transform everyday ambition into lasting business growth.
          </p>
          <p>
            Our integrated approach combines financial inclusion, consultancy, and training so entrepreneurs get the support they need at every stage of their journey.
          </p>
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
        </section>

        <section className="section">
          <div className="section__header">
            <p className="eyebrow">Our values</p>
            <h2>Accessibility, integrity, and empowerment guide everything we do.</h2>
          </div>
          <ul className="value-list">
            <li><strong>Accessibility:</strong> We meet people where they are and make support practical and reachable.</li>
            <li><strong>Integrity:</strong> We provide transparent guidance and honest terms without hidden costs.</li>
            <li><strong>Empowerment:</strong> We build capability and confidence rather than dependency.</li>
          </ul>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
