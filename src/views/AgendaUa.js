import React, { useEffect, useState } from 'react';
import request from '../utils/request';
import { apiReservas } from '../utils/api';

function AgendaUa() {
  
  const [reservas, setReservas] = useState([]);

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

  useEffect(function (){
    obtenerReservas();
  }, []);


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
export default AgendaUa;
