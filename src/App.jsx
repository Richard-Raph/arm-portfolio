import './App.css';
import Top from './layouts/Top';
import Home from './routes/Home';
import About from './routes/About';
import DotRing from './components/DotRing/DotRing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Top />
      <DotRing />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;