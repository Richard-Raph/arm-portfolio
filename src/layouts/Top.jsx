import { useState, useEffect } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

const LoadTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <a onClick={scrollToTop} className={`scroll-top ${isVisible ? 'active' : ''}`}>
      <BiUpArrowAlt />
    </a>
  );
};

export default PageTop;

export { LoadTop, PageTop };