import './DockBar.css';
import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo-fff.webp';
import { FaGithub, FaXTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';

const DockBar = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

  const isHome = location.pathname === '/';

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className='dock-bar'>
      <div className='dock-background'></div>
      <NavLink to='/' exact='true' className='dock-logo' title='Home'>
        <img src={Logo} alt='Logo' />
      </NavLink>

      <div className='dock-links'>
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

      <div className='dock-links'>
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
};

export default DockBar;