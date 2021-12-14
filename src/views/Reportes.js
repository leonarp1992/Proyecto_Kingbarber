import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { apiServicios } from '../utils/api';

function Reportes() {

    const [services, setServices] = useState([])

    const init=()=>{
        axios.get(apiServicios)
            .then(function(response){
                return response.data
            }).then(response=>{
                var datos = response;
                setServices(datos);     
        });
    };
    useEffect(init, []); 

    console.log(services);

    return (
      <div>
        <main className="flex-shrink-0">
          {/*<!-- Features section-->*/}
          <section>
            <div>
              <div className="d-flex justify-content-center fw-bolder">
                <h3>Reportes</h3>
              </div>
              <div
                className="d-flex justify-content-lg-end"
                style={{ alignItems: 'center' }}
              >
                <label for="">USUARIOS ATENDIDOS</label>
                <div className="col-lg-2"></div>
                <label
                  for="colFormLabelExample"
                  className="col-sm-1 col-form-label fw-bolder rounded-2 d-flex justify-content-center"
                  style={{ backgroundColor: '#C4C4C4' }}
                >
                  Buscar
                </label>
                <div className="col-sm-2">
                  <input
                    className="form-control form-control"
                    id="colFormLabelExample"
                    placeholder="Búsqueda"
                  />
                </div>
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
                      <th>FECHA</th>
                      <th>HORA</th>
                      <th>SERVICIO</th>
                      <th>CLIENTE</th>
                      <th>TOTAL</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#C4C4C4' }}>
                    <tr>
                      <td>2021/12/02</td>
                      <td>17:30</td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Todos los servicios</option>
                          <option>01 corte + lavado + peinado</option>
                          <option>02 cabello rapado</option>
                          <option>03 corte de cabello para niños</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Todos los clientes</option>
                          <option>Victor Hugo Correa</option>
                          <option>Johan Alexis Bedoya</option>
                          <option>Robinson Losada</option>
                        </select>
                      </td>
                      <td>$330.000</td>
                      <td>
                        <i className="bi bi-printer"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2021/12/03</td>
                      <td>18:00</td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Todos los servicios</option>
                          <option>01 corte + lavado + peinado</option>
                          <option>02 cabello rapado</option>
                          <option>03 corte de cabello para niños</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Todos los clientes</option>
                          <option>Carlos Alexander Rodriguez</option>
                          <option>Raul Rodriguez</option>
                          <option>Camilo Andrés Guetio</option>
                          <option>Juan Esteban Panameño</option>
                        </select>
                      </td>
                      <td>$530.000</td>
                      <td>
                        <i className="bi bi-printer"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="d-flex justify-content-lg-end"
                style={{ alignItems: 'center' }}
              >
                <label for="">INGRESOS</label>
                <div className="col-lg-2"></div>
                <label
                  for="colFormLabelExample"
                  className="col-sm-1 col-form-label fw-bolder rounded-2 d-flex justify-content-center"
                  style={{ backgroundColor: '#C4C4C4' }}
                >
                  Buscar
                </label>
                <div className="col-sm-2">
                  <input
                    className="form-control form-control"
                    id="colFormLabelExample"
                    placeholder="Búsqueda"
                  />
                </div>
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
                      <th>FECHA</th>
                      <th>INGRESOS</th>
                      <th></th>
                      <th>SERVICIO</th>
                      <th>INGRESOS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#C4C4C4' }}>
                    <tr>
                      <td>2021/12/02</td>
                      <td>$330.000</td>
                      <td>
                        <i className="bi bi-printer"></i>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Todos los servicios</option>
                          <option>01 corte + lavado + peinado</option>
                          <option>02 cabello rapado</option>
                          <option>03 corte de cabello para niños</option>
                        </select>
                      </td>
                      <td>$33.000</td>
                      <td>
                        <i className="bi bi-printer"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2021/12/03</td>
                      <td>$330.000</td>
                      <td>
                        <i className="bi bi-printer"></i>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Todos los servicios</option>
                          <option>01 corte + lavado + peinado</option>
                          <option>02 cabello rapado</option>
                          <option>03 corte de cabello para niños</option>
                        </select>
                      </td>
                      <td>$66.000</td>
                      <td>
                        <i className="bi bi-printer"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
export default Reportes;
