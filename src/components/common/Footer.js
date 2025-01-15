import React from 'react';
import './Footer.css'
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <>
        <ContactForm />
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo-section">
            <img src="https://www.cloudesign.com/_next/static/media/Cloudesign-Logo.14a21297.svg" alt="Cloudesign Logo" className="footer-logo" />
          </div>
          <div className="footer-social-section">
            <span className="social-title">Follow </span>
            <ul className="social-links">
              <li className="social-item">
                <a href="#" className="social-link">
                  <img src="https://www.cloudesign.com/images/servicefacebook.svg" alt="Facebook" className="social-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link">
                  <img src="https://www.cloudesign.com/images/service_instagram.svg" alt="Instagram" className="social-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link">
                  <img src="https://www.cloudesign.com/images/service_linkedin.svg" alt="LinkedIn" className="social-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link">
                  <img src="https://www.cloudesign.com/images/service_twitter.svg" alt="Twitter" className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-contact-details">
            <div className="footer-location">
              <h4 className="footer-title">Bangalore:</h4>
              <p className="title-desc">
                #70, 7th Cross, 16 B Main, 4th B Block, Near Koramangala B.D.A Complex, Bengaluru, Karnataka 560034
              </p>
            </div>
            <div className="footer-location">
              <h4 className="footer-title">Mumbai:</h4>
              <p className="title-desc">
                Crystal Palace, Chandivali Farm Road, Near Ram Baugh Andheri(E), NA, Mumbai, Maharashtra 400072
              </p>
            </div>
            <div className="footer-phone">
              <h4 className="footer-title">Phone:</h4>
              <p className="title-desc">+91-8689998893</p>
            </div>
            <div className="footer-email">
              <h4 className="footer-title">Get in Touch</h4>
              <p>
                <span>Contact Us:</span>
                <a href="mailto:sales@cloudesign.com" className="title-desc"> sales@cloudesign.com</a>
              </p>
            </div>
          </div>

          <div className="footer-about">
            <div className="about-section">
              <h4 className="footer-title">Who We Are</h4>
              <ul className="about-links">
                <li className="title-desc" ><a href="#">About Us</a></li>
                <li className="title-desc" ><a href="#">Blogs</a></li>
                <li className="title-desc" ><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="services-section">
              <h4 className="footer-title">What We Do</h4>
              <ul className="services-links">
                <li className='title-desc'><a href="#">Web Development</a></li>
                <li className='title-desc'><a href="#">Off-Shore Development</a></li>
                <li className='title-desc'><a href="#">Product Development</a></li>
                <li className='title-desc'><a href="#">Staff Augmentation</a></li>
                <li className='title-desc'><a href="#">App Modernization</a></li>
                <li className='title-desc'><a href="#">Microsoft Consulting</a></li>
                <li className='title-desc'><a href="#">UI/UX</a></li>
                <li className='title-desc'><a href="#">Data Warehouse</a></li>
                <li className='title-desc'><a href="#">Explore All</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-technologies">
            <div className="technologies-primary">
              <h4 className="footer-title">Technologies</h4>
              <ul className="tech-links">
                <li className='title-desc'><a href="#">React Js</a></li>
                <li className='title-desc'><a href="#">Angular Js</a></li>
                <li className='title-desc'><a href="#">Java</a></li>
                <li className='title-desc'><a href="#">And More...</a></li>
              </ul>
            </div>
            <div className="technologies-secondary">
              <ul className="tech-links">
                <li className='title-desc'><a href="#">DevOps</a></li>
                <li className='title-desc'><a href="#">Business Intelligence</a></li>
                <li className='title-desc'><a href="#">IOT Platform Engineering</a></li>
                <li className='title-desc'><a href="#">RPA - UiPath</a></li>
                <li className='title-desc'><a href="#">Mobile Development</a></li>
                <li className='title-desc'><a href="#">Quality Engineering</a></li>
                <li className='title-desc'><a href="#">AI & ML</a></li>
                <li className='title-desc'><a href="#">Low Code - Powerapps</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-careers-affiliates">
            <div className="footer-careers">
              <h4 className="footer-title">Careers</h4>
              <ul><li><a href="mailto:hr@cloudesign.com" className="title-disc"> hr@cloudesign.com</a></li></ul>
            </div>
            <div className="footer-affiliates">
              <h4 className="footer-title">Affiliate Brands</h4>
              <ul className="affiliates-links">
                <li>
                  <a href="#"><img src='https://www.cloudesign.com/_next/static/media/cloud-track.05d4db82.svg' alt="Cloud Track" className="title-desc" /></a>
                </li>
                <li>
                  <a href="#"><img src='https://www.cloudesign.com/_next/static/media/per-hourly.3bf385e1.svg' alt="Hourly" className="title-desc" /></a>
                </li>
                <li>
                  <a href="#"><img src='https://www.cloudesign.com/_next/static/media/rpa-ants.5ed34f15.svg' alt="RPants" className="title-desc" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='footer-copyright'>
        <div className='copyright'>
          <p className='copyright-desc'>© Cloudesign Technology Service Pvt Ltd. All Rights Reserved.</p>
        </div>
        <div className='terms-policy'>
          <p className='terms'>Terms of Use </p>
          <div className='dot'></div>
          <p className='policy'> Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
