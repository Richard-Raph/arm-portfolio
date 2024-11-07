import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Window.css';

export default function Window({
    id,
    name,  // Used in window title
    content,
    isActive,
    setActive,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
}) {
    const [isMaximized, setIsMaximized] = useState(false);
    const [pos, setPos] = useState({ top: 100, left: 100 });
    const dragRef = useRef(null);  // Reference to the window container
    const dragBarRef = useRef(null); // Reference to the window bar (draggable area)

    // Function to handle closing the window
    const handleClose = () => closeWindow(id);

    // Function to handle activating the window on mouse down anywhere in the window
    const handleMouseDown = () => setActive(id);

    // Function to minimize the window
    const handleMinimize = () => minimizeWindow(id);

    // Function to maximize the window
    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
        maximizeWindow(id);
    };

    // Dragging functionality (only triggered from the window bar)
    const handleDragStart = (e) => {
        const offsetX = e.clientX - pos.left;
        const offsetY = e.clientY - pos.top;

        // Function to handle the dragging effect
        const handleMouseMove = (moveEvent) => {
            const newLeft = moveEvent.clientX - offsetX;
            const newTop = moveEvent.clientY - offsetY;
            setPos({ top: newTop, left: newLeft });
        };

        // Remove mousemove and mouseup event listeners once drag ends
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        // Add event listeners for mouse move and mouse up
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <section
            ref={dragRef}
            style={{ top: pos.top, left: pos.left }}
            className={`window ${isActive ? 'active' : ''} ${isMaximized ? 'maximized' : ''}`}
            onMouseDown={handleMouseDown}  // Makes the window active when clicked anywhere
        >
            <span className='glare outer'></span>
            <div className='window-outline'>
                <span className='glare inner'></span>
                <div className='window-main'>
                    <div
                        ref={dragBarRef}  // The window bar is the area that triggers dragging
                        className='window-bar'
                        onMouseDown={(e) => handleDragStart(e)}  // Drag only starts when clicking on the window bar
                    >
                        <span className='window-title'>{name}</span>  {/* Display the name prop here */}
                        <span className='dot red' onClick={handleClose}></span>
                        <span className='dot yellow' onClick={handleMinimize}></span>
                        <span className='dot green' onClick={handleMaximize}></span>
                    </div>
                    <div className='window-content'>{content}</div>
                </div>
            </div>
        </section>
    );
}

Window.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,  // Ensure the 'name' prop is passed and used
    content: PropTypes.node.isRequired,
    isActive: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    closeWindow: PropTypes.func.isRequired,
    minimizeWindow: PropTypes.func.isRequired,
    maximizeWindow: PropTypes.func.isRequired,
};
