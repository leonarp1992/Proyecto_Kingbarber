import React, { useEffect, useState } from 'react';
import request from '../utils/request';
import { apiReservas } from '../utils/api';
import { useSelector } from 'react-redux';

function MisReservas() {
  
  const user = useSelector((state) => state.user);

  const [reservas, setReservas] = useState([]);

  const obtenerReservas = async() =>{
    const response = await request({
      link: apiReservas,
      body: {id_user: user._id},
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
                <h3>Mis reservas</h3>
              </div>
              <div className="table-responsive">
                <table
                  className="table"
                  style={{
                    color: 'black',
                    width: '100%',
                    alignContent: 'center',
                  }}
                >
                  <thead style={{ backgroundColor: '#343a40', color: 'white' }}>
                    <tr>
                      <th>SERVICIO</th>
                      <th>DESCRIPCIÓN</th>
                      <th>PRECIO</th>
                      <th>BARBERO</th>
                      <th>FECHA</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#C4C4C4' }}>
                    {reservas.map(function(reserva){
                      return(
                        <tr>
                          <td>{reserva?.id_service.name}</td>
                          <td>{reserva?.id_service.description}</td>
                          <td>${reserva?.id_service.price  + " "}COP </td>
                          <td>{reserva?.id_barbero.name}</td>
                          <td>{new Date(reserva?.date).toLocaleString()}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}
export default MisReservas;
