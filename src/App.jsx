import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Layout from './components/Layout';
import Window from './components/Window';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [windows, setWindows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeWindow, setActiveWindow] = useState(null);
  const [draggedWindow, setDraggedWindow] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const openWindow = (windowName) => {
    if (windows.some((window) => window.name === windowName)) return;

    const newWindow = {
      id: Date.now(),
      isActive: false,
      name: windowName,
      isMinimized: false,
      isMaximized: false,
      content: windowContent(windowName),
    };
    setWindows((prevWindows) => [...prevWindows, newWindow]);
    setActiveWindow(newWindow.id);
  };

  const setActive = (windowId) => {
    setActiveWindow(windowId);
    setWindows((prevWindows) =>
      prevWindows.map((window) => ({
        ...window,
        isActive: window.id === windowId,
      }))
    );
  };

  const closeWindow = (windowId) => {
    setWindows((prevWindows) => prevWindows.filter((window) => window.id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  const minimizeWindow = (windowId) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) => ({
        ...window,
        isMinimized: window.id === windowId ? true : window.isMinimized,
      }))
    );
  };

  const maximizeWindow = (windowId) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) => ({
        ...window,
        isMaximized: window.id === windowId ? !window.isMaximized : window.isMaximized,
      }))
    );
  };

  const windowContent = (windowName) => {
    switch (windowName) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      case 'Project':
        return <Project />;
      default:
        return <div>Unknown Window</div>;
    }
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Layout
          windows={windows}
          setActive={setActive}
          openWindow={openWindow}
          closeWindow={closeWindow}
          activeWindow={activeWindow}
          minimizeWindow={minimizeWindow}
          maximizeWindow={maximizeWindow}
        >
          {windows.map((window) => (
            <Window
              key={window.id}
              id={window.id}
              name={window.name}
              setActive={setActive}
              content={window.content}
              closeWindow={closeWindow}
              minimizeWindow={minimizeWindow}
              maximizeWindow={maximizeWindow}
              setDraggedWindow={setDraggedWindow}
              isActive={window.id === activeWindow}
              isDragged={draggedWindow === window.id}
            />
          ))}
        </Layout>
      )}
    </>
  );
}

export default App;