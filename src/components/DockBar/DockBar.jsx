import './DockBar.css';
import { NavLink, Link } from 'react-router-dom';
import { FaGithub, FaXTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';

const DockBar = () => {

  return (
    <nav className='dock-bar'>
      <div className='dock-background'></div>
      <a className='dock-logo'>Logo</a>
      
      <div className='dock-links'>
        <NavLink to='/' exact='true' activeclassname='active'>
          <span>Home</span>
        </NavLink>

        <NavLink to='/about' activeclassname='active'>
          <span>About</span>
        </NavLink>

        <NavLink to='/project' activeclassname='active'>
          <span>Projects</span>
        </NavLink>

        <NavLink to='/skills' activeclassname='active'>
          <span>Skills</span>
        </NavLink>

        <NavLink to='/contact' activeclassname='active'>
          <span>Contact</span>
        </NavLink>
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