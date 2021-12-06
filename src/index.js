import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuienesSomos from './Quienessomos';
import Servicios from './Servicios';
import ReservasUi from './ReservasUi';
import AgendaUa from './AgendaUa';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/quienessomos" element={<QuienesSomos />}/>
        <Route path="/servicios" element={<Servicios />}/>
        <Route path="/reservasui" element={<ReservasUi />}/>
        <Route path="/agendaua" element={<AgendaUa />}/>


      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
