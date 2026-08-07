function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__content">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something lasting together.</h2>
        <div className="contact-card">
          <p>
            <strong>Phone{' (Whatsapp)'}:</strong>{' '}
            <a
              href="https://wa.me/2349013960304?text=Hello%2C%20My%20name%20is%20____%20and%20I%20would%20like%20to%20partner%20with%20Bold%20Lead%20Concept."
              target="_blank"
              rel="noreferrer noopener"
            >
              +234 901 396 0304
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:kolafunmiibironke@gmail.com">Boldleadconcepts@gmail.com</a>
          </p>
          <p><strong>Location:</strong> Lagos Mainland, Nigeria</p>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="copyright">©2026 Bold Lead Concepts. All rights reserved.</p>
        <p className="powered-by"><u>PoweredByParadox</u></p> 
      </div>
    </footer>
  );
}

export default Footer;
