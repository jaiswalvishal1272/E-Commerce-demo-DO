import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <h1>E-Comm</h1>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
