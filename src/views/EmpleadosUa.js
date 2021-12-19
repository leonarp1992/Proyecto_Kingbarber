import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from '../utils/request';
import {apiGetBarbers } from '../utils/api';


function EmpleadosUa() {
    
    const [barbers, setBarbers] = useState([]);
    const obtenerBarberos = async() => {
      const response = await request({
        link: apiGetBarbers,
        method: 'GET',
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

    console.log(barbers)


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
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.id_user.services[0].name}</td>
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
          </div>
        </section>
      </main>
      {/*<!-- Footer-->*/}
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className=" small m-0 text-white">
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
export default EmpleadosUa;