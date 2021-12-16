import React, { useEffect } from 'react';
import Home from './views/Home';
import QuienesSomos from './views/Quienessomos';
import Servicios from './views/Servicios';
import ReservasUi from './views/ReservasUi';
import AgendaUa from './views/AgendaUa';
import Login from './views/Login';
import Registro from './views/Registro';
import CalificacionesUa from './views/CalificacionesUa';
import EmpleadosUa from './views/EmpleadosUa';
import ServiciosUa from './views/ServiciosUa';
import Reportes from './views/Reportes';
import ServiciosUe from './views/ServiciosUe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { saveUser } from './redux/actions/user.action';
import NavbarUa from './components/NavbarUa';

const RouterContainer = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(saveUser(JSON.parse(user)));
    }
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <NavbarUa />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agendaua" element={<AgendaUa />} />
          <Route path="/calificacionesua" element={<CalificacionesUa />} />
          <Route path="/empleadosua" element={<EmpleadosUa />} />
          <Route path="/serviciosua" element={<ServiciosUa />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/reservasui" element={<ReservasUi />} />
          <Route path="/serviciosue" element={<ServiciosUe />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default RouterContainer;
