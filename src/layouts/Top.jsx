import { useState, useEffect } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';

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