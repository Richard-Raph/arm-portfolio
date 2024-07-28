import './DockBar.css';
import { Link } from 'react-router-dom';
import { MdWork, MdBook } from 'react-icons/md';
import { FaHome, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const DockBar = () => {
  return (
    <nav className='dock-bar'>
      <div className='dock-background'></div>
      <div className='dock-links'>
        <Link to='/' data-title='Home'>
          <FaHome size={24} />
        </Link>

        <Link to='/about' data-title='About'>
          <MdBook size={24} />
        </Link>

        <Link to='/project' data-title='Project'>
          <MdWork size={24} />
        </Link>

        <i className='dock-divider'></i>

        <a href='https://github.com/Richard-Raph' target='_blank' rel='noopener noreferrer' data-title='Github'>
          <FaGithub size={24} />
        </a>

        <a href='https://twitter.com/your-profile' target='_blank' rel='noopener noreferrer' data-title='X'>
          <FaTwitter size={24} />
        </a>

        <a href='https://linkedin.com/in/your-profile' target='_blank' rel='noopener noreferrer' data-title='LinkedIn'>
          <FaLinkedin size={24} />
        </a>

        <a href='mailto:arm.techtonic@gmail.com' data-title='Mail'>
          <FaEnvelope size={24} />
        </a>

        <i className='dock-divider'></i>

        <span>
          <FaEnvelope size={24} />
        </span>
      </div>
    </nav>
  );
};

export default DockBar;