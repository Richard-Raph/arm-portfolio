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
    const [isMaximized, setIsMaximized] = useState(false); // Track whether the window is maximized
    const [isBeingDragged, setIsBeingDragged] = useState(false);
    const [pos, setPos] = useState({ top: 'auto', left: 'auto' }); // Initial position is 'auto'

    // Effect to re-center window when activated and not being dragged
    useEffect(() => {
        if (isActive && !isBeingDragged && !isMaximized) {
            // Only re-center if the position is not 'auto' (meaning it was dragged previously)
            if (pos.top !== 'auto' && pos.left !== 'auto') {
                const windowWidth = dragRef.current?.offsetWidth || 300;
                const windowHeight = dragRef.current?.offsetHeight || 200;
                const centerLeft = window.innerWidth / 2 - windowWidth / 2;
                const centerTop = window.innerHeight / 2 - windowHeight / 2;
                setPos({ top: centerTop, left: centerLeft });
            }
        }
    }, [isActive, isBeingDragged, pos, isMaximized]);

    // Handle closing the window
    const handleClose = (e) => {
        e.stopPropagation(); // Prevent triggering window drag
        closeWindow(id);
    };

    // Handle activating the window on mouse down anywhere in the window (but not on buttons)
    const handleMouseDown = (e) => {
        // Prevent dragging if the click happened on the buttons (red, yellow, or green dots)
        if (e.target.closest('.dot')) return; // Do not drag if clicking on the button
        setActive(id);
        setDraggedWindow(id); // Set this window as the dragged window
    };

    // Handle minimizing the window
    const handleMinimize = (e) => {
        e.stopPropagation(); // Prevent triggering window drag
        minimizeWindow(id);
    };

    // Handle maximizing the window
    const handleMaximize = (e) => {
        e.stopPropagation(); // Prevent triggering window drag
        setIsMaximized((prev) => !prev); // Toggle maximized state
        maximizeWindow(id); // Call the maximize function passed in props
    };

    // Dragging functionality (only triggered from the window bar)
    const handleDragStart = (e) => {
        if (isMaximized) return; // Don't allow dragging when maximized

        setIsBeingDragged(true);

        // Get the current position of the window (either 'auto' or calculated)
        const initialTop = pos.top === 'auto' ? 0 : pos.top;
        const initialLeft = pos.left === 'auto' ? 0 : pos.left;

        // Calculate the initial offset of mouse position relative to the window position
        const offsetY = e.clientY - initialTop;
        const offsetX = e.clientX - initialLeft;

        // Function to handle the dragging effect
        const handleMouseMove = (moveEvent) => {
            const newTop = moveEvent.clientY - offsetY;
            const newLeft = moveEvent.clientX - offsetX;
            setPos({ top: newTop, left: newLeft }); // Update position on move
        };

        // Remove mousemove and mouseup event listeners once drag ends
        const handleMouseUp = () => {
            setIsBeingDragged(false);
            setDraggedWindow(null); // Clear dragged state when the window is released
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };

        // Add event listeners for mouse move and mouse up
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);
    };

    return (
        <section
            ref={dragRef}
            onMouseDown={handleMouseDown} // Activate dragging only if not clicking on buttons
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
                        onMouseDown={handleDragStart} // Only start dragging from the window bar
                    >
                        <div className='window-dots'>
                            <button className='dot red' onClick={handleClose}></button>
                            <button className='dot yellow' onClick={handleMinimize}></button>
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
