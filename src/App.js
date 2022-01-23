/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Routes/About';
import Home from './Routes/Home';
import Product from './Routes/Product';
import { Context, ContextTimer } from './Hooks/Context';

const App = function () {
  const [title, setTitle] = useState('Products');
  const [numbers, setNumbers] = useState([60, 120, 180]);
  const [position, setPosition] = useState();
  const [todos, setTodos] = useState({
    responses: [],
    section: [],
    times: [],
  });
  return (
    <div className="App">
      <Context.Provider value={{
        title, setTitle,
      }}
      >
        <Navbar />
        <ContextTimer.Provider value={{
          numbers, setNumbers, position, setPosition, todos, setTodos,
        }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ContextTimer.Provider>
      </Context.Provider>
    </div>
  );
};

export default App;
