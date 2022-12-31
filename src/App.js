import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Lodging from './Pages/Lodging/Lodging'
import Error from './Pages/Error/Error'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/logements/:id' element={<Lodging />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
