import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiServicios } from '../utils/api';
import request from '../utils/request';
function ServiciosUa() {

  const [services, setServices] = useState([]);

  const getServices = async() => {
    const response = await request({
      link: apiServicios,
      method: 'GET',
    });
    if (response.success) {
      setServices(response.services)
    } else {
      alert(`${response.message}`);
    }
  };
  console.log(services);

  useEffect(function(){
    getServices();
  },[]);

  return (
    <div>
      <main className="flex-shrink-0">
        <section>
          <div className="panel-body" style={{ margin: '5%' }}>
            <div className="d-flex justify-content-center fw-bolder">
              <h3>Servicios</h3>
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
                    <th>DURACIÓN</th>
                    <th>PRECIO</th>
                    <th>ESTADO</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#C4C4C4' }}>
                  {services.map(function(item){
                    return(
                      <tr>
                        <td>{item?.name}</td>
                        <td>{item?.description}</td>
                        <td>{item?.duration}</td>
                        <td>{item?.price}</td>
                        <td>{item?.status}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <p>
                ¿Crear Servicio?
                <Link to="/createservice" className="link">
                Crealo aquí
                </Link>
            </p>
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
export default ServiciosUa;
