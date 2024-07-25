import { useContext } from 'react';
import { MouseContext } from '../context/MouseContext';

const Home = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <a
      href='https://google.com'
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler('')}
    >
      Hover over me
    </a>
  );
};

export default Home;