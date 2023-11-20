import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import SearchRecipe from './SearchRecipe.js';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/searchrecipe" element={<SearchRecipe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
