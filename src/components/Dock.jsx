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
  { id: 'Home', imgSrc: home, tooltip: 'Home', type: 'internal' },
  { id: 'About', imgSrc: about, tooltip: 'About Me', type: 'internal' },
  { id: 'Contact', imgSrc: contact, tooltip: 'Contact', type: 'internal' },
  { id: 'Project', imgSrc: project, tooltip: 'Projects', type: 'internal' },
  { id: 'Blog', imgSrc: blog, tooltip: 'Follow my trends', type: 'internal' },
  { id: 'Terminal', imgSrc: terminal, tooltip: 'Hire me!', type: 'internal' }, // This might open internal content
  { id: 'Daily Dev', imgSrc: daily, tooltip: 'Visit daily dev', type: 'external', url: 'https://www.dailydev.io/' },
  { id: 'GitHub', imgSrc: github, tooltip: 'My GitHub repos', type: 'external', url: 'https://www.github.com' },
  { id: 'Twitter', imgSrc: twitter, tooltip: 'My Twitter profile', type: 'external', url: 'https://www.x.com' },
  { id: 'Instagram', imgSrc: instagram, tooltip: 'My Instagram profile', type: 'external', url: 'https://www.instagram.com' },
  { id: 'YouTube', imgSrc: youtube, tooltip: 'Watch my videos on YouTube', type: 'external', url: 'https://www.youtube.com' }
];

export default function DockBar({ openWindow, activeWindow }) {
  const handleIconClick = (windowId, linkType, url) => {
    if (linkType === 'internal') {
      openWindow(windowId);  // Open internal content
    } else if (linkType === 'external' && url) {
      openWindow(windowId, url);  // Open external content inside the window
    }
  };

  return (
    <nav className='dock-bar'>
      <ul>
        {icons.map(({ id, imgSrc, tooltip, type, url }, index) => (
          <li
            key={index}
            onClick={() => handleIconClick(id, type, url)}
            className={`icon ${activeWindow === id ? 'active' : ''}`}
          >
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
  activeWindow: PropTypes.string.isRequired,
};
