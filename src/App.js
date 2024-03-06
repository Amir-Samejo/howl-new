
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Headings from './components/Headings';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Slider from './components/Slider';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <About />
      <Headings />
      <Services />
      <Portfolio />
      <Pricing />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
