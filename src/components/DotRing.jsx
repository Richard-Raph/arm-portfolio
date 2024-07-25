import { useContext } from 'react';
import { MouseContext } from '../context/MouseContext';
import useMousePosition from '../hooks/useMousePosition';

const DotRing = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={'ring ' + cursorType}
      ></div>
      <div
        className={'dot ' + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;