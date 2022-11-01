import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './pages/Home';
import Quote from './pages/Quotes';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </Router>
);

export default App;
