// import '../assets/css/DockBar.css';
// import Logo from '../assets/images/logo-fff.webp';
// import { useState, useEffect, useCallback } from 'react';
// import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
// import { FaGithub, FaXTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';

// export default function DockBar() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showLinks, setShowLinks] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const hasHash = location.hash !== '';
//   const isHome = location.pathname === '/';

//   const handleLinkClick = (index) => {
//     setActiveIndex(index);
//   };

//   const handleScroll = useCallback(() => {
//     setShowLinks(window.scrollY > 100);
//   }, []);

//   const handleLogoClick = (e) => {
//     e.preventDefault();

//     if (isHome) {
//       if (hasHash) {
//         navigate('/', { replace: true });
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }
//     } else {
//       navigate('/');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   return (
//     <nav className='dock-bar'>
//       <div className='dock-background'></div>
//       <NavLink
//         to='/'
//         data-title='Home'
//         onClick={handleLogoClick}
//         className={`dock-logo ${showLinks ? 'hidden' : ''}`}
//       >
//         <img src={Logo} alt='Logo' />
//       </NavLink>

//       <div className={`dock-links ${showLinks ? 'show' : ''}`}>
//         {[
//           { to: '/about', text: 'About', title: 'About Me' },
//           { to: '/project', text: 'Projects', title: 'My Works' },
//           { to: '/blog', text: 'Blog', title: 'My Blogs' },
//           { to: '/contact', text: 'Contact', title: 'Contact Me' }
//         ].map((link, index) => (
//           <NavLink
//             to={link.to}
//             key={link.to}
//             data-title={link.title}
//             onClick={() => handleLinkClick(index)}
//             className={`${isHome ? 'link' : index < activeIndex ? 'right' : index > activeIndex ? 'left' : ''}`}
//           >
//             <span>{link.text}</span>
//           </NavLink>
//         ))}
//       </div>

//       <div className={`dock-links ${showLinks ? '' : 'show'}`}>
//         <Link to='https://github.com/Richard-Raph' target='_blank' rel='noopener noreferrer' data-title='Github'>
//           <FaGithub />
//         </Link>

//         <Link to='https://x.com/rich_tech123' target='_blank' rel='noopener noreferrer' data-title='X'>
//           <FaXTwitter />
//         </Link>

//         <Link to='https://www.linkedin.com/in/rich-tech123' target='_blank' rel='noopener noreferrer' data-title='LinkedIn'>
//           <FaLinkedin />
//         </Link>

//         <Link to='https://www.youtube.com/@rich_tech123' target='_blank' rel='noopener noreferrer' data-title='Youtube'>
//           <FaYoutube />
//         </Link>
//       </div>
//     </nav>
//   );
// }

import { useRef } from 'react';
import '../assets/css/DockBar.css';
import { Link } from 'react-router-dom';
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

// Function for scaling values based on input ranges
const scaleValue = (value, from, to) => {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return Math.floor(capped * scale + to[0]);
};

const maxAdditionalSize = 5;

export default function DockBar() {
  const dockRef = useRef(null);

  // Function to handle mouse movement over each app icon
  const handleAppHover = (ev) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    // Set the offset CSS variables
    dockRef.current.style.setProperty(
      '--dock-offset-left',
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      '--dock-offset-right',
      `${offsetPixels}px`
    );
  };

  return (
    <nav ref={dockRef} className='dock-bar'>
      <ul>
        {[
          { url: '/', imgSrc: home, tooltip: 'Home' },
          { url: '/about', imgSrc: about, tooltip: 'About me' },
          { url: '/project', imgSrc: project, tooltip: 'My works' },
          { url: '/contact', imgSrc: contact, tooltip: 'Contact me' },
          { url: '/blog', imgSrc: blog, tooltip: 'Follow my trends' },
          { url: 'https://www.frontend.fyi', imgSrc: terminal, tooltip: 'Hire me!' },
          { url: 'https://www.frontend.fyi', imgSrc: github, tooltip: 'My github repo' },
          { url: 'https://www.frontend.fyi', imgSrc: daily, tooltip: 'Visit daily dev' },
          { url: 'https://www.frontend.fyi', imgSrc: twitter, tooltip: 'My twitter(X) profile' },
          { url: 'https://www.frontend.fyi', imgSrc: instagram, tooltip: 'My instagram profile' },
          { url: 'https://youtu.be/_ZcIFTvLm64', imgSrc: youtube, tooltip: 'Watch my videos on YouTube' }
        ].map(({ url, imgSrc, tooltip }, index) => (
          <li key={index} className='icon' onMouseMove={handleAppHover}>
            <Link to={url}>
              <img src={imgSrc} alt={tooltip} />
              <span className='tooltip'>{tooltip}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}