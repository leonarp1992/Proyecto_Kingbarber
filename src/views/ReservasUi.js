import React, { useEffect, useState } from 'react';
import request from '../utils/request';
import { apiReservas, apiEditReservas} from '../utils/api';

function ReservasUi() {
  
  const [reservas, setReservas] = useState([]); 
  const [state, setState] = useState(''); 

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

  const guardar = async(idReserva) => {
    const response = await request({link: apiEditReservas, 
          body:({
          id_reserva: idReserva,
          stated: state
      }), method: 'POST'
      })
      if(response.success){            
          alert(`${response.message}`)
      }else{
          alert(`${response.message}`)
      }
  }

  useEffect(function (){
    obtenerReservas();
  }, []);

  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Features section-->*/}
        <section>
          <div className="" style={{ margin: '5%' }}>
            <div className="row">
              <div className="col-lg-6 col-xl">
                <table
                  className="table table-sm-responsive"
                  style={{
                    color: 'black',
                    width: '100%',
                    alignContent: 'center',
                    border: 'solid 1px',
                  }}
                >
                  <thead style={{ backgroundColor: '#C4C4C4' }}>
                    <tr>
                      <th>USUARIO</th>
                      <th>SERVICIO</th>
                      <th>FECHA</th>
                      <th>ESTADO</th>
                      <th>ACCIÓN</th>
                    </tr>
                  </thead>                  
                  <tbody style={{ backgroundColor: 'white' }}>
                      {
                        reservas.map(function(reserva){
                          return(
                            <tr>
                              <td>{reserva.id_user.name}</td>
                              <td>{reserva.id_service.name}</td>
                              <td>{new Date(reserva.date).toLocaleString()}</td>
                              <td>
                                <select
                                  className="form-select"
                                  aria-label="select example"
                                  onChange={function(e){
                                    setState(e.target.value);
                                  }}
                                >
                                  <option value={""}>{reserva.estado}</option>
                                  <option value={'Completado'}>Completado</option>
                                  <option value={'Cancelado'}>Cancelado</option>
                                </select>
                              </td>
                              <td>                        
                              <button onClick={()=> guardar(reserva._id)}>GUARDAR</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ color: 'white' }}
            >
              <h3>AGENDA DE SERVICIOS</h3>
            </div>

            <div
              className="d-flex justify-content-lg-end"
              style={{ alignItems: 'center' }}
            >
              <label
                for="colFormLabelExample"
                className="col-sm-1 col-form-label fw-bolder rounded-2 d-flex justify-content-center"
                style={{ backgroundColor: '#C4C4C4' }}
              >
                Buscar
              </label>
              <div className="col-sm-2">
                <input
                  type="email"
                  className="form-control form-control"
                  id="colFormLabelExample"
                  placeholder="Búsqueda"
                />
              </div>
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
                  <thead style={{ backgroundColor: '#C4C4C4' }}>
                    <tr>
                      <th>FECHA</th>
                      <th>HORA</th>
                      <th>SERVICIOS</th>
                      <th>PRECIO</th>
                      <th>EMPLEADO</th>
                      <th>CLIENTE</th>
                      <th>ESTADO</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: 'white' }}>
                    <tr>
                      <td>2021/12/03</td>
                      <td>19:00</td>
                      <td>04 Corte de cabello</td>
                      <td>$33.000</td>
                      <td>Leonar Perez</td>
                      <td>Emanuel Macias</td>
                      <td>FINALIZADO</td>
                      <td>
                        <i className="bi bi-pencil-square"></i>{' '}
                        <i className="bi bi-trash-fill"></i>
                      </td>
                    </tr>
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
export default ReservasUi;
