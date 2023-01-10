import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Lodging from './Pages/Lodging/Lodging'
import Error from './Pages/Error/Error'

function App() {
  return (
    <div className="App">
    <React.StrictMode> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/logements/:id' element={<Lodging />}/>
        <Route path='*' element={<Error />}/>
        <Route path='/error404' element={<Error />}/>
      </Routes>
    </React.StrictMode> 
    </div>
  );
}

export default App;
