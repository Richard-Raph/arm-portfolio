import '../assets/css/Dock.css';
import PropTypes from 'prop-types';
import home from '../assets/images/home.webp';
import blog from '../assets/images/blog.webp';
import about from '../assets/images/about.webp';
import daily from '../assets/images/daily.webp';
import github from '../assets/images/github.webp';
import contact from '../assets/images/contact.webp';
import project from '../assets/images/project.webp';
import youtube from '../assets/images/youtube.webp';
import twitter from '../assets/images/twitter.webp';
import terminal from '../assets/images/terminal.webp';
import instagram from '../assets/images/instagram.webp';

const icons = [
  { id: 'Home', imgSrc: home, tooltip: 'Home' },
  { id: 'About', imgSrc: about, tooltip: 'About Me' },
  { id: 'Contact', imgSrc: contact, tooltip: 'Contact' },
  { id: 'Project', imgSrc: project, tooltip: 'Projects' },
  { id: 'Blog', imgSrc: blog, tooltip: 'Follow my trends' },
  { id: 'Terminal', imgSrc: terminal, tooltip: 'Hire me!' },
  { id: 'Daily', imgSrc: daily, tooltip: 'Visit daily dev' },
  { id: 'GitHub', imgSrc: github, tooltip: 'My github repos' },
  { id: 'Twitter', imgSrc: twitter, tooltip: 'My twitter profile' },
  { id: 'Instagram', imgSrc: instagram, tooltip: 'My instagram profile' },
  { id: 'YouTube', imgSrc: youtube, tooltip: 'Watch my videos on YouTube' }
];

export default function DockBar({ openWindow }) {
  const handleIconClick = windowId => openWindow(windowId); // Pass window ID on click

  return (
    <nav className='dock-bar'>
      <ul>
        {icons.map(({ id, imgSrc, tooltip }, index) => (
          <li key={index} className='icon' onClick={() => handleIconClick(id)}>
            <img src={imgSrc} alt={tooltip} />
            <span className='tooltip'>{tooltip}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

DockBar.propTypes = {
  openWindow: PropTypes.func.isRequired,
};
