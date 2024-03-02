
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Planet from './components/Planet/Planet';
import Title from './components/Navbar/Title';

function App() {
  return (
    <div className="App">

  
 <Title />
    <Navbar/>

    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/planet" element={<Planet />} />

    </Routes>
      
    </div>
  );
}

export default App;
