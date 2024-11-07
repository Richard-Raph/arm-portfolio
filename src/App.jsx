import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Top from './components/Top';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Layout>
            <Top />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/about' element={<About />} />
              <Route path='/project' element={<Project />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </>
  );
}

export default App;