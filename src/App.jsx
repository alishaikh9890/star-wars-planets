
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Planet from './components/Planet/Planet';

function App() {
  return (
    <div className="App">
    <Navbar/>

    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/planet" element={<Planet />} />

    </Routes>
      
    </div>
  );
}

export default App;
