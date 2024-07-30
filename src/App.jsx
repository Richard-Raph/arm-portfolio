import './App.css';
import Top from './layouts/Top';
import Home from './routes/Home';
import About from './routes/About';
import Layout from './layouts/Layout';
import Project from './routes/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Top />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;