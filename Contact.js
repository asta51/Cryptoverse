import React, { useEffect } from 'react';
import './Contact.css'; // Make sure to create and include the CSS file for styling
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Contact = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      once: true,     // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <h1 data-aos="fade-right">Contact<span className='primary'>Us</span></h1>
        <div className='contact-info'>
          <h2 data-aos="fade-up">Get in Touch</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            If you have any questions or need further information, feel free to contact us using the form below or through the contact details provided.
          </p>
          <ul className='contact-details'>
            <li data-aos="fade-up" data-aos-delay="200">
              <strong>Email:</strong> support@cryptoverse.com
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <strong>Address:</strong> 10 ohio, Gotham City, BC 45678
            </li>
          </ul>
        </div>
        <div className='contact-form'>
        <h2 data-aos="fade-right">Contact<span className='primary'>Form</span></h2>
          <form action='mailto:support@cryptoverse.com' method='post' encType='text/plain'>
            <label htmlFor='name' data-aos="fade-up" data-aos-delay="500">Name:</label>
            <input type='text' placeholder='Enter your name' id='name' name='name' required data-aos="fade-up" data-aos-delay="600" />
            
            <label htmlFor='email' data-aos="fade-up" data-aos-delay="700">Email:</label>
            <input type='email' placeholder='Enter your email' id='email' name='email' required data-aos="fade-up" data-aos-delay="800" />
            
            <label htmlFor='message' data-aos="fade-up" data-aos-delay="900">Message:</label>
            <textarea id='message' placeholder='Enter your message' name='message' rows='6' required data-aos="fade-up" data-aos-delay="1000"></textarea>
            
            <button type='submit' className='submit-button' data-aos="fade-up" data-aos-delay="1100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
