import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import p from './img/pict.png';
import './style.css';
//import './info.json';
import Aboutus from './Aboutus.js';
import Contact from "./Contact.js"
import BMI from "./BMI.js"
import Home from './Home';
import API from './API';
// import LoginAPI from './LoginAPI';
import Weather from "./Weather.js"
import News from "./News"
import Movie from './Movie';
import Products from './Product';
import Food from './Food.js';
export default function Navbar() {
  return (
    <BrowserRouter>
      <div className='Container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light" id="nav">
          <div className="container-fluid">
             <Link className="navbar-brand" to="#" id="logo">
              <img src={p} alt="" width="70px"id="logo"  />
              <span>API Point</span>
             </Link>
 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/Home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Aboutus">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/BMI">
                    BMI
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle"
                    to="/API"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    APIs
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/Weather">
                        Weather Report
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/News">
                        Latest News
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Food">
                        Food Recipe
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Movie">
                        Movies
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Product">
                        Products
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
 
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/BMI" element={<BMI/>} />
           <Route path="/API" element={<API />} /> 
           {/* <Route path="/LoginAPI" element={<LoginAPI />} /> */} 
           <Route path="/Product" element={<Products />} /> 
          <Route path="/Weather" element={<Weather />} /> 
          <Route path="/News" element={<News />} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/Food" element={<Food />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
