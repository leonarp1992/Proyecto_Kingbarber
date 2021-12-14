import React from 'react';
import ReactDOM from 'react-dom';
import App from './vistas/App';
import QuienesSomos from './vistas/Quienessomos';
import Servicios from './vistas/Servicios';
import ReservasUi from './vistas/ReservasUi';
import AgendaUa from './vistas/AgendaUa';
import Login from './vistas/Login';
import Registro from './vistas/Registro';
import CalificacionesUa from './vistas/CalificacionesUa';
import EmpleadosUa from './vistas/EmpleadosUa';
import ServiciosUa from './vistas/ServiciosUa';
import Reportes from './vistas/Reportes';
import ServiciosUe from './vistas/ServiciosUe';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/quienessomos" element={<QuienesSomos />}/>
        <Route path="/servicios" element={<Servicios />}/>        
        <Route path="/registro" element={<Registro />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/agendaua" element={<AgendaUa />}/>
        <Route path="/calificacionesua" element={<CalificacionesUa />}/>
        <Route path="/empleadosua" element={<EmpleadosUa />}/>
        <Route path="/serviciosua" element={<ServiciosUa />}/>
        <Route path="/reportes" element={<Reportes />}/>
        <Route path="/reservasui" element={<ReservasUi />}/>
        <Route path="/serviciosue" element={<ServiciosUe />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
