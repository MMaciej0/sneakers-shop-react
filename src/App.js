import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Slider from './components/Slider';
import { useGlobalContext } from './context';
import Slides from './sliderData';
import Submenu from './components/Submenu';

function App() {
  return (
    <div className="grid-container">
      <header>
        <Navbar />
        <Sidebar />
        <Submenu />
      </header>
      <main>
        <Slider slides={Slides} />
      </main>
    </div>
  );
}

export default App;
