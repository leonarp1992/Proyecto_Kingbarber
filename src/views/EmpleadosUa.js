import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from '../utils/request';
import {apiGetBarbers } from '../utils/api';


function EmpleadosUa() {
    
    const [barbers, setBarbers] = useState([]);

    const obtenerBarberos = async() => {
      const response = await request({
        link: apiGetBarbers,
        body: {withService: true},
        method: 'GET'
      });
      if (response.success) {
        setBarbers(response.users)
      } else {
        alert(`${response.message}`);
      }
    };

    useEffect(function(){
      obtenerBarberos();
    },[]);

  return (
    <div>
      <main className="flex-shrink-0">
        <section>
          <div className="panel-body" style={{ margin: '5%' }}>
            <div className="d-flex justify-content-center fw-bolder">
              <h3>Personal Barbería</h3>
            </div>
            <div className="table-responsive">
              <table
                className="table table-sm-responsive"
                style={{
                  color: 'black',
                  width: '100%',
                  alignContent: 'center',
                }}
              >
                <thead style={{ backgroundColor: '#343a40', color: 'white' }}>
                  <tr>
                    <th>NOMBRE</th>
                    <th>CORREO</th>
                    <th>SERVICIOS</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#C4C4C4' }}>
                  {barbers.map(function(i){
                    return(
                      <tr>
                        <td>{i?.name}</td>
                        <td>{i?.email}</td>
                        <td>{i.services?.length && i.services[0].name}</td>
                      </tr>
                    )
                  })}                
                </tbody>
              </table>
            </div>
            <p>
            ¿Crear empleado?
              <Link to="/createemp" className="link">
                Crealo aquí
              </Link>
            </p>
            <p>
            ¿Editar empleado?
              <Link to="/editempleados" className="link">
                Editalo aquí
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default EmpleadosUa;