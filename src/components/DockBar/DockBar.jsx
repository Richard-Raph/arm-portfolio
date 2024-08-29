import './DockBar.css';
import Logo from '../../assets/images/logo-fff.webp';
import { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaGithub, FaXTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';

export default function DockBar() {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const isHome = location.pathname === '/';

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setShowLinks(scrollPosition > 100);
  }, []);

  const handleLogoClick = (e) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className='dock-bar'>
      <div className='dock-background'></div>
      <NavLink
        to='/'
        exact='true'
        title='Home'
        onClick={handleLogoClick}
        className={`dock-logo ${showLinks ? 'hidden' : ''}`}
      >
        <img src={Logo} alt='Logo' />
      </NavLink>

      <div className={`dock-links ${showLinks ? 'show' : ''}`}>
        {[
          { to: '/about', text: 'About', title: 'About Me' },
          { to: '/project', text: 'Projects', title: 'My Works' },
          { to: '/blog', text: 'Blog', title: 'My Blogs' },
          { to: '/contact', text: 'Contact', title: 'Contact Me' }
        ].map((link, index) => (
          <NavLink
            to={link.to}
            key={link.to}
            data-title={link.title}
            onClick={() => handleLinkClick(index)}
            className={`${isHome ? 'link' : index < activeIndex ? 'right' : index > activeIndex ? 'left' : ''}`}
          >
            <span>{link.text}</span>
          </NavLink>
        ))}
      </div>

      <div className={`dock-links ${showLinks ? '' : 'show'}`}>
        <Link to='https://github.com/Richard-Raph' target='_blank' rel='noopener noreferrer' data-title='Github'>
          <FaGithub />
        </Link>

        <Link to='https://x.com/rich_tech123' target='_blank' rel='noopener noreferrer' data-title='X'>
          <FaXTwitter />
        </Link>

        <Link to='https://www.linkedin.com/in/rich-tech123' target='_blank' rel='noopener noreferrer' data-title='LinkedIn'>
          <FaLinkedin />
        </Link>

        <Link to='https://www.youtube.com/@rich_tech123' target='_blank' rel='noopener noreferrer' data-title='Youtube'>
          <FaYoutube />
        </Link>
      </div>
    </nav>
  );
}