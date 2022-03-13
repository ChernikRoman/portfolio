import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<div>Home</div>} />
            <Route path="works" element={<div>works</div>} />
            <Route path="about-me" element={<div>About me</div>} />
            <Route path="techs" element={<div>Techs</div>} />
          </Route>
          <Route path="*" element={<div>Not found</div>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


