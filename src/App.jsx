import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './routes/Home';
import Blog from './routes/Blog';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import { LoadTop, PageTop } from './components/Top';
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
            <LoadTop />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/about' element={<About />} />
              <Route path='/project' element={<Project />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <PageTop />
          </Layout>
        </Router>
      )}
    </>
  );
}

export default App;