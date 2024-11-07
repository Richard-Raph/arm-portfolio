// import { useRef } from 'react';
// import '../assets/css/DockBar.css';
// import { Link } from 'react-router-dom';
// import home from '../assets/images/home.webp';
// import blog from '../assets/images/blog.webp';
// import about from '../assets/images/about.webp';
// import daily from '../assets/images/daily.webp';
// import github from '../assets/images/github.webp';
// import contact from '../assets/images/contact.webp';
// import project from '../assets/images/project.webp';
// import youtube from '../assets/images/youtube.webp';
// import twitter from '../assets/images/twitter.webp';
// import terminal from '../assets/images/terminal.webp';
// import instagram from '../assets/images/instagram.webp';

// const icons = [
//   { url: '/', imgSrc: home, tooltip: 'Home' },
//   { url: '/about', imgSrc: about, tooltip: 'About me' },
//   { url: '/project', imgSrc: project, tooltip: 'My works' },
//   { url: '/contact', imgSrc: contact, tooltip: 'Contact me' },
//   { url: '/blog', imgSrc: blog, tooltip: 'Follow my trends' },
//   { url: 'https://www.frontend.fyi', imgSrc: terminal, tooltip: 'Hire me!' },
//   { url: 'https://www.frontend.fyi', imgSrc: daily, tooltip: 'Visit daily dev' },
//   { url: 'https://www.frontend.fyi', imgSrc: github, tooltip: 'My github repos' },
//   { url: 'https://www.frontend.fyi', imgSrc: twitter, tooltip: 'My twitter(X) profile' },
//   { url: 'https://www.frontend.fyi', imgSrc: instagram, tooltip: 'My instagram profile' },
//   { url: 'https://youtu.be/_ZcIFTvLm64', imgSrc: youtube, tooltip: 'Watch my videos on YouTube' }
// ]

// const scaleValue = (value, from, to) => {
//   const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
//   const scale = (to[1] - to[0]) / (from[1] - from[0]);
//   return Math.floor(capped * scale + to[0]);
// };

// const maxAdditionalSize = 5;

// export default function Dock() {
//   const dockRef = useRef(null);

//   const handleAppHover = (ev) => {
//     if (!dockRef.current) return;

//     const mousePosition = ev.clientX;
//     const iconWidth = ev.currentTarget.getBoundingClientRect().width;
//     const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;

//     const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
//     const offsetPixels = scaleValue(
//       cursorDistance,
//       [0, 1],
//       [maxAdditionalSize * -1, maxAdditionalSize],
//     );

//     dockRef.current.style.setProperty(
//       '--dock-left',
//       `${offsetPixels * -1}px`
//     );

//     dockRef.current.style.setProperty(
//       '--dock-right',
//       `${offsetPixels}px`
//     );
//   };

//   return (
//     <nav ref={dockRef} className='dock-bar'>
//       <ul>
//         {icons.map(({ url, imgSrc, tooltip }, index) => (
//           <li key={index} className='icon' onMouseMove={handleAppHover}>
//             <Link to={url}>
//               <img src={imgSrc} alt={tooltip} />
//               <span className='tooltip'>{tooltip}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


import PropTypes from 'prop-types';
import '../assets/css/Dock.css';
import home from '../assets/images/home.webp';
import blog from '../assets/images/blog.webp';
import about from '../assets/images/about.webp';
import contact from '../assets/images/contact.webp';
import project from '../assets/images/project.webp';

const icons = [
  { url: 'Home', imgSrc: home, tooltip: 'Home' },
  { url: 'Blog', imgSrc: blog, tooltip: 'Blog' },
  { url: 'About', imgSrc: about, tooltip: 'About Me' },
  { url: 'Contact', imgSrc: contact, tooltip: 'Contact' },
  { url: 'Project', imgSrc: project, tooltip: 'Projects' },
];

export default function DockBar({ openWindow }) {
  const handleIconClick = windowName => openWindow(windowName);

  return (
    <nav className='dock-bar'>
      <ul>
        {icons.map(({ url, imgSrc, tooltip }, index) => (
          <li key={index} className='icon' onClick={() => handleIconClick(url)}>
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
