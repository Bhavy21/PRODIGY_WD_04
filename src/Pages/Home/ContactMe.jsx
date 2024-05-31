import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactMe(){
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <div className="contact--container">
        <div className="contact--item">
          <a href="mailto:bhavyanathwani@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="contact--icon" />
            <span>bhavyanathwani@gmail.com</span>
          </a>
        </div>
        <div className="contact--item">
          <a href="https://www.linkedin.com/in/bhavya-nathwani-15753b2a7" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="contact--icon" />
            <span>Bhavya Nathwani</span>
          </a>
        </div>
      </div>
    </section>
  );
}
