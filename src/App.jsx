import './App.css';
import Top from './layouts/Top';
import Home from './routes/Home';
import Blog from './routes/Blog';
import About from './routes/About';
import Layout from './layouts/Layout';
import Contact from './routes/Contact';
import Project from './routes/Project';
import Preloader from './layouts/Preloader';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : 
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
      }
    </>
  );
}

export default App;