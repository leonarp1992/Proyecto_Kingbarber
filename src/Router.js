import React, { useEffect, useState } from 'react';
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
import Reservar from './views/Reservar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { saveUser } from './redux/actions/user.action';
import CreateEmp from './views/CreateEmp';
import CreateService from './views/CreateService';
import MisReservas from './views/MisReservas';
import ServiciosUi from './views/ServiciosUi';
import EditEmp from './views/EditEmp';
import Footer from './components/Footer';



const RouterContainer = () => {

  const [verify, setVerify] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(saveUser(JSON.parse(user)));
    }
    setVerify(true);
  }, []);
  
  if(!verify){
    return null;
  }
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/agendaua" element={<AgendaUa />} />
          <Route path="/calificacionesua" element={<CalificacionesUa />} />
          <Route path="/createemp" element={<CreateEmp />} />
          <Route path="/createservice" element={<CreateService />} />          
          <Route path="/empleadosua" element={<EmpleadosUa />} />
          <Route path="/editempleados" element={<EditEmp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/misreservas" element={<MisReservas />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/registro" element={<Registro />} />          
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/reservasui" element={<ReservasUi />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/serviciosua" element={<ServiciosUa />} />
          <Route path="/serviciosue" element={<ServiciosUe />} />
          <Route path="/serviciosui" element={<ServiciosUi />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default RouterContainer;
