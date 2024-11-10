import React from 'react';
import '..//styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <textarea placeholder="Message" className="form-input"></textarea>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
