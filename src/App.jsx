
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Planet from './components/Planet/Planet';
import Films from './components/Films/Films';
import Title from './components/Navbar/Title';
import Vehicle from './components/Vehicle/Vehicle';

function App() {
  return (
    <div className="App">
  
    <Title />
    <Navbar/>



  <div className='modal fade modal-dark' id="modal">
  <div className='modal-dialog modal-dialog-centered modal-sm '>
    <div className='modal-content bg-dark shine'>
      <div className='modal-header'>
        <h3 className='modal-title'>Star Wars</h3>
        <button className=' ms-auto' data-bs-dismiss="modal">❎</button>
      </div>
      <div className='modal-body'>
        <p>lorem ipsum lorem</p>
      </div>

      <div className='modal-footer'>
        <button className='btn btn-info'>Close</button>
      </div>
    </div>
  </div>
</div>
  

    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/planet" element={<Planet />} />
       <Route path="/film" element={<Films />} />
       <Route path='/vehicle' element={<Vehicle/>} />

    </Routes>
      
    </div>
  );
}

export default App;
