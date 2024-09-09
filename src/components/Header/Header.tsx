import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './header.css';
import ContactModal from '../Modal/ContactModal';
import Contact from '../../components/Contact/Contact';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the menu if clicking outside the menu and the button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <img src="/assets/logo.png" alt="Joe's logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li onClick={openModal} ><Link to="#">Contact</Link></li>
              {/* <li><button onClick={openModal} className="nav-link-button">Contact</button></li> */}
            </ul>
          </nav>
          {/* Social media buttons */}
          <div className='social-media'>  
            <a href="https://www.linkedin.com/in/josephine-closan/" target="_blank" rel="noopener noreferrer">
              <span data-text="LinkedIn"><Icon icon="mdi:linkedin" className='mediaIcon' /></span></a>
            <a href="https://github.com/JoeClos" target="_blank" rel="noopener noreferrer">
              <span data-text="GitHub"><Icon icon="mdi:github" className='mediaIcon' /></span></a>
            <a href="mailto:josephine.closan@yahoo.com">
              <span data-text="Email"><Icon icon="ic:baseline-email" className='mediaIcon' /></span></a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            ref={buttonRef}
            className="hamburger-button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <Icon icon="iconamoon:close" width="30" height="30" />
            ) : (
              <Icon icon="iconamoon:menu-burger-horizontal-light" width="30" height="30" />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        <nav ref={menuRef} className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li onClick={toggleMenu}><Link to="/">Home</Link></li>
            <li onClick={toggleMenu}><Link to="/about">About</Link></li>
            <li onClick={toggleMenu}><Link to="/projects">Projects</Link></li>
            {/* <li onClick={toggleMenu}><Link to="/contact">Contact</Link></li> */}
            <li onClick={openModal} ><Link to="#">Contact</Link></li>
            <li className="social-media-mobile">
              <a href="https://www.linkedin.com/in/josephine-closan/" target="_blank" rel="noopener noreferrer">
                <span data-text="LinkedIn"><Icon icon="mdi:linkedin" className='mediaIcon' /></span></a>
              <a href="https://github.com/JoeClos" target="_blank" rel="noopener noreferrer">
                <span data-text="GitHub"><Icon icon="mdi:github" className='mediaIcon' /></span></a>
              <a href="mailto:josephine.closan@yahoo.com">
                <span data-text="Email"><Icon icon="ic:baseline-email" className='mediaIcon' /></span></a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal}>
        <Contact onClose={closeModal} />
      </ContactModal>
    </>
  );
};

export default Header;
