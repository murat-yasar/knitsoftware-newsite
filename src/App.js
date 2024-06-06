import './App.css';
import React from 'react';

import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from 'react-router-dom';

// Components
import Menu from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Challenges from './pages/Challenges'
import About from './pages/About'
import Approach from './pages/Approach'
import Contact from './pages/Contact'

import Clients from './pages/Clients'
import Products from './pages/Products'

import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Cookie from './pages/Cookie'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
          <div className='main'>
            <Routes>
              <Route index element={<Home />} />   
              <Route path='challenges' element={<Challenges />} />
              <Route path='about' element={<About />} />
              <Route path='approach' element={<Approach />} />
              <Route path='contact' element={<Contact />} />

              <Route path='clients' element={<Clients />} />
              <Route path='products' element={<Products />} />

              <Route path='terms' element={<Terms />} />
              <Route path='privacy' element={<Privacy />} />
              <Route path='cookie' element={<Cookie />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
