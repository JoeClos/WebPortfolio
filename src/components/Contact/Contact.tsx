import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

interface ContactProps {
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  useEffect(() => {
    if (userId) {
      emailjs.init(userId);
    } else {
      console.error('EmailJS User ID is not defined');
    }
  }, [userId]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        name: name,
        email: email,
        message: message,
      });
      alert('Thank you for your message! I\'ll get back to you soon.');
    } catch (error) {
      console.log(error);
      alert('Sending form was unsuccessful');
    }
    onClose();

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');

    // Close the modal after 5 seconds
    setTimeout(() => {
      onClose();
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <button className="close-form-btn" onClick={onClose}>
        &times;
      </button>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
