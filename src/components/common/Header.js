import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';
import logodark from '../../assets/images/Cloudesign-Logo.14a21297.svg';
import logowhite from '../../assets/images/white-logo.80467766.svg';
import close from '../../assets/images/cross-menu-icon.1454274e.svg';
import Hamburger from '../../assets/images/menuIcon.cee6cfc9.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {/* for bigger screen Navbar------------*/}
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logowhite} alt="Logo" width="258" height="48" />
        </Link>
      </div>
      <nav className='navbar p-0'>
        <ul className="nav-links">    
          <li><Link to="/" className='m-0'>Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Our Work</Link></li>
          <li><Link to="/">Careers</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li className='navbtnli'>
            <Link to="">
              <button className="navbtn">Let’s Collaborate</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

{/* responsive Navbar --------------*/}
      <header className="res-header ">
    
    <div className="res-logo d-res">
        <Link to="/">
          <img src={logowhite} alt="Logo" width="258" height="48" />
        </Link>
    </div>
       <div className="hamburger" onClick={toggleMenu}>
        <img src={Hamburger} alt="menu" />
      </div>
      </header>
      <nav className={`res-navbar ${isOpen ? 'open' : ''} d-res`}>
        <ul className="res-nav-links">
          <li className="closebtn d-res">
            <Link to="/">
              <img src={logodark} alt="Logo" width="258" height="51" />
            </Link>
              <img src={close} alt="close" onClick={toggleMenu} />
            
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about">Our Work</Link></li>
          <li><Link to="/about">Careers</Link></li>
          <li><Link to="/about">Blog</Link></li>
          <li>
            <Link to="/about">
              <button className="navbtn">Let’s Collaborate</button>
            </Link>
          </li>
          <li><div className="bar d-res"></div></li>
          <li className="nav-social d-res">
            <p>Follow</p>
            <div>
              <img src="https://www.cloudesign.com/images/service_instagram.svg" alt="Instagram" />
              <img src="https://www.cloudesign.com/images/servicefacebook.svg" alt="Facebook" />
              <img src="https://www.cloudesign.com/images/service_linkedin.svg" alt="LinkedIn" />
              <img src="https://www.cloudesign.com/images/service_twitter.svg" alt="Twitter" />
            </div>
          </li>
        </ul>
      </nav>
    
    </>
  );
};

export default Header;
