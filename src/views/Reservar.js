import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import request from '../utils/request';
import "react-datepicker/dist/react-datepicker.css";
import { apiCreateReservas, apiGetBarbers, apiServicios } from '../utils/api';
import { useSelector } from 'react-redux';


function Reservar() {
  const user = useSelector((state) => state.user);
  const [date, setDate] = useState(new Date());
  const [services, setServices] = useState([]);
  const [service, setService] = useState('');
  const [barbers, setBarbers] = useState([]);
  const [barberShow, setBarberShow] = useState([]);
  const [barber, setBarber] = useState('');
  

  console.log(barbers);
  console.log(services);
  console.log(barberShow);
  console.log(service)

  const obtenerServicios = async() => {
    const response = await request(
      {link: apiServicios,
      method: 'GET',
    });
    if (response.success) {
      setServices(response.services)
    } else {
      alert(`${response.message}`);
    }
  };

  const obtenerBarberos = async() => {
    const response = await request({
      link: apiGetBarbers,
      method: 'GET'
    });
    if (response.success) {
      setBarbers(response.users)
    } else {
      alert(`${response.message}`);
    }
  }
  useEffect(function (){
    obtenerServicios();
    obtenerBarberos();
  }, []);

  useEffect(function(){
    const barberos_by_Service = barbers.filter(function(barber){
      if(barber.services.includes(service)){
        return true;
      }else{
        return false;
      }
    });
    setBarberShow(barberos_by_Service);
  },[service]);
  
  const reservar = async() =>{
        
    if(!service || !barber || !date){
        alert("Por favor diligencie todos los campos.")
    }else{
        const response = await request({link: apiCreateReservas, 
            body:({
            id_user: user._id,
            id_service : service,
            id_barbero: barber,
            date: date.getTime()
        }), method: 'POST'
        })
        console.log(response)
        if(response.success){            
            alert('Reserva creada exitosamente')
            window.location.href='./misreservas'
        }else{
            alert(`${response.message}`)
        }
    }          
};

  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Features section-->*/}
        <section className="py-2" id="features">
          <div className="container px-5 my-10">
            <div className="py-2 text-center">
              <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                  <div className="col-lg-10 col-xl-7">
                    <div className="text-center">
                      <div className="contenedor">
                        <h1>Reserva</h1>
                        <h4>Servicio</h4>
                        <select
                          className="form-select"
                          aria-label="select example"
                          onChange={function(e){
                            setService(e.target.value);
                          }}
                        >{services.map(function(value, index){
                          return(
                            <option key={index} value={value._id}>{value.name}</option>
                          )
                        })}
                        </select>
                        <br/>
                        <h4>Barbero</h4>
                        <select
                          className="form-select"
                          aria-label="select example"
                          onChange={function(e){
                            setBarber(e.target.value);
                          }}
                        >{barberShow.map(function(value, index){
                          return(
                            <option key={index} value={value._id}>{value.name}</option>
                          )
                        })}
                        </select>
                        <br/>
                        <h4>Fecha</h4>
                        <div>
                        <DatePicker
                          selected={date}
                          onChange={setDate}
                          showTimeSelect
                          dateFormat="Pp"
                          className='border border-1'
                        /> 
                        </div>
                        <br/>
                        <input
                          type="button"
                          value="Reservar"
                          className="button"
                          onClick={reservar}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*<!-- Footer-->*/}
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright 2021 &copy; MisionTIC 2022
              </div>
            </div>
            <div className="col-auto">
              <a className="link-light small" href="#!">
                <i className="bi bi-instagram"> @barberking</i>
              </a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">
                <i className="bi bi-facebook"> BarbeKing</i>
              </a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">
                <i className="bi bi-whatsapp"> 3009000800</i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/*<!-- Bootstrap core JS-->*/}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/*<!-- Core theme JS-->*/}
      <script src={process.env.PUBLIC_URL + '/js/scripts.js'}></script>
    </div>
  );
}
export default Reservar;
