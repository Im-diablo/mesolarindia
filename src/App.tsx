import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Career from './pages/Career';
import Enquiry from './pages/Enquiry';
import ContactUs from './pages/ContactUs';
import Media from './pages/news/Media';
import Events from './pages/news/Events';
import Blogs from './pages/news/Blogs';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import Team from './pages/Team';


function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
