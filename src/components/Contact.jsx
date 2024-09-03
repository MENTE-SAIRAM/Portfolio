import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construct the mailto link with form data
    const mailtoLink = `mailto:mentesairam@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open the user's default mail client with pre-filled form data
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            Feel free to reach out to me for any inquiries, collaborations, or just to say hi!
          </p>
          <p>Email: <a href="mailto:mentesairam@gmail.com">mentesairam@gmail.com</a></p>
          <p>Phone: <a href="tel:8712173349">8712173349</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/mente-sairam-923725266/">LinkedIn Profile</a></p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
