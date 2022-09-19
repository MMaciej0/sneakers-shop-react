import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Slides from './sliderData';

function App() {
  return (
    <div className="grid-container">
      <header>
        <Navbar />
      </header>
      <main>
        <Slider slides={Slides} />
      </main>
    </div>
  );
}

export default App;
