import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


import AppRoutes from './AppRoutes.js';
export default function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/searchrecipe" style={{ padding: 5 }}>
          Recipes
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About Us
        </Link>
        <Link to="/contact" style={{ padding: 5 }}>
          Contact us
        </Link>
      </nav>
      <AppRoutes/>
    </Router>
  );
  
}
