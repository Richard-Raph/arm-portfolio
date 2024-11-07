import '../assets/css/Window.css';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

export default function Window({
  id,
  name,
  content,
  isActive,
  setActive,
  closeWindow,
  minimizeWindow,
  maximizeWindow,
  setDraggedWindow,
}) {
  const dragRef = useRef(null);
  const dragBarRef = useRef(null);
  const [isMaximized, setIsMaximized] = useState(false); 
  const [isBeingDragged, setIsBeingDragged] = useState(false);
  const [pos, setPos] = useState({ top: 'auto', left: 'auto' });

  useEffect(() => {
    if (isActive && !isBeingDragged && !isMaximized) {
      if (pos.top !== 'auto' && pos.left !== 'auto') {
        const windowWidth = dragRef.current?.offsetWidth || 300;
        const windowHeight = dragRef.current?.offsetHeight || 200;
        const centerLeft = window.innerWidth / 2 - windowWidth / 2;
        const centerTop = window.innerHeight / 2 - windowHeight / 2;
        setPos({ top: centerTop, left: centerLeft });
      }
    }
  }, [isActive, isBeingDragged, pos, isMaximized]);

  const handleClose = (e) => {
    e.stopPropagation(); 
    closeWindow(id);  // Close the window completely (remove it from the list)
  };

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-dots')) return;
    setActive(id);
    setDraggedWindow(id);
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    minimizeWindow(id); // Keep minimize as is
  };

  const handleMaximize = (e) => {
    e.stopPropagation();
    setIsMaximized((prev) => !prev);
    maximizeWindow(id);
  };

  const handleDragStart = (e) => {
    if (isMaximized) return;
    if (e.target.closest('.window-dots')) return;
    setIsBeingDragged(true);

    const initialTop = pos.top === 'auto' ? 0 : pos.top;
    const initialLeft = pos.left === 'auto' ? 0 : pos.left;

    const offsetY = e.clientY - initialTop;
    const offsetX = e.clientX - initialLeft;

    const handleMouseMove = (moveEvent) => {
      const newTop = moveEvent.clientY - offsetY;
      const newLeft = moveEvent.clientX - offsetX;
      setPos({ top: newTop, left: newLeft });
    };

    const handleMouseUp = () => {
      setIsBeingDragged(false);
      setDraggedWindow(null);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };

  return (
    <section
      ref={dragRef}
      onMouseDown={handleMouseDown}
      style={{
        top: isMaximized ? 'auto' : `${pos.top}px`,
        left: isMaximized ? 'auto' : `${pos.left}px`,
      }}
      className={`window ${isActive ? 'active' : ''} ${isMaximized ? 'max' : ''}`}
    >
      <span className='glare outer'></span>
      <div className='window-outline'>
        <span className='glare inner'></span>
        <div className='window-main'>
          <div
            ref={dragBarRef}
            className='window-bar'
            onMouseDown={handleDragStart}
          >
            <div className='window-dots'>
              <button className='dot red' onClick={handleClose}></button>  {/* Close the window entirely */}
              <button className='dot yellow' onClick={handleMinimize}></button> {/* Minimize as before */}
              <button className='dot green' onClick={handleMaximize}></button>
            </div>
          </div>
          <div className='window-content'>{content}</div>
        </div>
      </div>
    </section>
  );
}

Window.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  closeWindow: PropTypes.func.isRequired,
  minimizeWindow: PropTypes.func.isRequired,
  maximizeWindow: PropTypes.func.isRequired,
  setDraggedWindow: PropTypes.func.isRequired,
};