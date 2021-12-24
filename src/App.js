import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Routes/About';
import Home from './Routes/Home';
import Product from './Routes/Product';

const App = function () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
