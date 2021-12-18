import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { apiServicios } from '../utils/api';

function AgendaUa() {

    // const [services, setServices] = useState([])

    // const init=()=>{
    //     axios.get(apiServicios)
    //         .then(function(response){
    //             return response.data
    //         }).then(response=>{
    //             var datos = response;
    //             setServices(datos);     
    //     });
    // };
    // useEffect(init,[]); 

    // console.log(services);

    return (
    <div>
      <main className="flex-shrink-0"> 
        {/*<!-- Features section-->*/}
        <section>
                  <div className="panel-body" style={{margin:'5%'}}>
                      <div className="d-flex justify-content-center fw-bolder"><h3>Agenda de servicios</h3></div>
                      
                      <div className="d-flex justify-content-lg-end" style={{alignItems:'center'}}>
                          <label for="colFormLabelExample" className="col-sm-1 col-form-label fw-bolder rounded-2 d-flex justify-content-center" style={{backgroundColor:'#C4C4C4'}}>Buscar</label>
                          <div className="col-sm-2">
                              <input type="email" className="form-control form-control" id="colFormLabelExample" placeholder="Búsqueda"/>
                          </div>
                      </div>
                      <div className="justify-content-center">
                          <div className="table-responsive" style={{justifyContent:'center'}}>
                              <table className="table table-responsive-xxl" style={{color:'black', width:'100%', alignContent:'center'}}>
                                  <thead style={{backgroundColor:'#343a40', color:'white'}}>
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
                                  <tbody style={{backgroundColor:'#C4C4C4'}}>
                                        {/* {services.map(function(servicio) {
                                            return (
                                                <tr>
                                                    <td>{servicio.Fecha}</td>
                                                    <td>{servicio.Hora}</td>
                                                    <td>{servicio.Nombre}</td>
                                                    <td>${servicio.Precio}</td>
                                                    <td>Leonar Perez</td>
                                                    <td>Emanuel Macias</td>
                                                    <td>FINALIZADO</td>
                                                    <td>
                                                        <i className="bi bi-pencil-square"></i> <i className="bi bi-trash-fill"></i>
                                                    </td>
                                                </tr>
                                            )
                                        })}; */}
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
                  <div className="col-auto"><div className="small m-0 text-white">Copyright 2021 &copy; MisionTIC 2022</div></div>
                  <div className="col-auto">
                      <a className="link-light small" href="#!"><i className="bi bi-instagram"> @barberking</i></a>
                      <span className="text-white mx-1">&middot;</span>
                      <a className="link-light small" href="#!"><i className="bi bi-facebook"> BarbeKing</i></a>
                      <span className="text-white mx-1">&middot;</span>
                      <a className="link-light small" href="#!"><i className="bi bi-whatsapp"> 3009000800</i></a>
                  </div>
              </div>
          </div>
      </footer>
      {/*<!-- Bootstrap core JS-->*/}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/*<!-- Core theme JS-->*/}
      <script src={process.env.PUBLIC_URL + "/js/scripts.js"}></script>
    </div>
    );
}
export default AgendaUa;
