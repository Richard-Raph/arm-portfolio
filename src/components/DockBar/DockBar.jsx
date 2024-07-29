import './DockBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxMoon } from 'react-icons/rx';
import { MdBook } from 'react-icons/md';
import { LuHome, LuCode2, LuSun } from 'react-icons/lu';
import { FaGithub, FaXTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';

const DockBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <nav className='dock-bar'>
      <div className='dock-background'></div>
      <div className='dock-links'>
        <Link to='/' data-title='Home'>
          <LuHome />
        </Link>

        <Link to='/about' data-title='About'>
          <MdBook />
        </Link>

        <Link to='/project' data-title='Projects'>
          <LuCode2 />
        </Link>

        <i className='dock-divider'></i>

        <a href='https://github.com/Richard-Raph' target='_blank' rel='noopener noreferrer' data-title='Github'>
          <FaGithub />
        </a>

        <a href='https://twitter.com/your-profile' target='_blank' rel='noopener noreferrer' data-title='X'>
          <FaXTwitter />
        </a>

        <a href='https://www.linkedin.com/in/rich-tech123/?lipi=urn%3Ali%3Apage%3Ad_flagship3_nurture_all%3BWPPhxjYEQXyxbtpJlgJYLg%3D%3D' target='_blank' rel='noopener noreferrer' data-title='LinkedIn'>
          <FaLinkedin />
        </a>

        <a href='mailto:arm.techtonic@gmail.com' data-title='Youtube'>
          <FaYoutube />
        </a>

        <i className='dock-divider'></i>

        <span onClick={toggleDarkMode}>
          {darkMode ? <RxMoon /> : <LuSun />}
        </span>
      </div>
    </nav>
  );
};

export default DockBar;