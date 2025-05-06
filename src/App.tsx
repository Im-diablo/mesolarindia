import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Career from './pages/Career';
import Partner from './pages/Partner';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;