import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;