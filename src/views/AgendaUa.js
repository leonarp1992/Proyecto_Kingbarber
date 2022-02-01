import React, { useEffect, useState } from 'react';
import request from '../utils/request';
import { apiReservas, apiGetBarbers, apiReservasBarber } from '../utils/api';

function AgendaUa() {
  
  const [reservas, setReservas] = useState([]);  
  const [barber, setBarber] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [reservasByBarber, setReservasByBarber] = useState([]);

   
  const obtenerReservas = async() =>{
    const response = await request({
      link: apiReservas,
      method: 'GET',
    });
    if(response.success){
      setReservas(response.reservas);
    }else{
      alert(`${response.message}`)
    };
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
    obtenerReservas();
    obtenerBarberos();
  }, []);

  const buscar = async() =>{
    if(!barber){
      alert('Seleccione el barbero');      
    }else{
      console.log(barber)
      const response = await request({
        link: apiReservasBarber,
        body: {id_barbero: barber},
        method: 'GET',
      });
      console.log(response);
      if(response.success){
        setReservasByBarber(response.reservas);
      }else{
        alert('El barbero no tiene agenda programada')
        setReservasByBarber([]);
      };
    }
  };


  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Features section-->*/}
        <section>
          <div className="panel-body" style={{ margin: '5%' }}>
            <div className="d-flex justify-content-center fw-bolder">
              <h3>Agenda de servicios</h3>
            </div>
            <div className="justify-content-center">
              <div
                className="table-responsive"
                style={{ justifyContent: 'center' }}
              >
                <table
                  className="table table-responsive-xxl"
                  style={{
                    color: 'black',
                    width: '100%',
                    alignContent: 'center',
                  }}
                >
                  <thead style={{ backgroundColor: '#343a40', color: 'white' }}>
                    <tr>
                      <th>FECHA</th>
                      <th>SERVICIO</th>
                      <th>EMPLEADO</th>
                      <th>CLIENTE</th>
                      <th>ESTADO</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#C4C4C4' }}>
                    {reservas.map(function (servicio){
                      return ( 
                        <tr>
                          <td>{new Date(servicio?.date).toLocaleString()}</td>
                          <td>{servicio?.id_service.name}</td>
                          <td>{servicio?.id_barbero.name}</td>
                          <td>{servicio?.id_user.name}</td>
                          <td>{servicio?.estado}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="panel-body" style={{ margin: '5%'}}>
            <div className="d-flex justify-content-center fw-bolder">
              <h3>Agenda Por Empleado</h3>
            </div>
            <div className='col-lg-10 col-lg-8' style={{margin:'1%', display:'flex' }}>
            <select
              className="form-select"
              style={{display: 'inline-block', margin:'1%', width:'400px'}}
              aria-label="select example"
              onChange={function(e){
                setBarber(e.target.value);
              }}
            >
            <option value={""}>Seleccione el Empleado</option>
              {barbers.map(function(value, index){
              return(
                <option key={index} value={value._id}>{value.name}</option>
              )
            })}
            </select>
            <input
              type="button"
              value="Buscar"
              className="button"
              style={{display: 'inline-block', margin:'1%', width:'100px'}}
              onClick={buscar}
            />            
            </div>
            <div className="justify-content-center">
              <div
                className="table-responsive"
                style={{ justifyContent: 'center' }}
              >
                <table
                  className="table table-responsive-xxl"
                  style={{
                    color: 'black',
                    width: '100%',
                    alignContent: 'center',
                  }}
                >
                  <thead style={{ backgroundColor: '#343a40', color: 'white' }}>
                    <tr>
                      <th>FECHA</th>
                      <th>SERVICIO</th>
                      <th>EMPLEADO</th>
                      <th>CLIENTE</th>
                      <th>ESTADO</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#C4C4C4' }}>
                    {reservasByBarber.map(function (servicio){
                      return ( 
                        <tr>
                          <td>{new Date(servicio?.date).toLocaleString()}</td>
                          <td>{servicio?.id_service.name}</td>
                          <td>{servicio?.id_barbero.name}</td>
                          <td>{servicio?.id_user.name}</td>
                          <td>{servicio?.estado}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default AgendaUa;
