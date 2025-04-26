import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Home />
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;