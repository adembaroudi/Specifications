
import './App.css';
import Features from './components/Features';
import Idea from './components/Idea';
import Navbar from './components/Navbar';
function App() {
  return (
    <div  className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <Idea/>
      <Features/>
    </div>
  );
}

export default App;
