import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App/App';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import AboutMe from './components/AboutMe/AboutMe';
import Techs from './components/Techs/Techs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="works" element={<Works />} />
            <Route path="about-me" element={<AboutMe/>} />
            <Route path="techs" element={<Techs />} />
          </Route>
          <Route path="*" element={<div>Not found</div>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
