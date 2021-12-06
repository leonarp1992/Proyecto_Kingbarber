import {Link} from 'react-router-dom';
function AgendaUa() {
  return (
  <div>
    <main className="flex-shrink-0">
      {/*<!-- Navigation-->*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt ="" width="90" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="">Calificaciones</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="">Empleados</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="">Servicios</Link></li>
                        <li className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" id="navbarDropdownBlog" role="button" data-bs-toggle="dropdown" aria-expanded="false">Agenda</Link>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                <li><Link to="" className="dropdown-item" >Agenda</Link></li>
                                <li><Link to="" className="dropdown-item" >Reportes</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link to='/' className="nav-link" href="">Cerrar Sesión</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

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
                                    <tr>
                                        <td>2021/12/03</td>
                                        <td>19:00</td>
                                        <td>04 Corte de cabello</td>
                                        <td>$33.000</td>
                                        <td>Leonar Perez</td>
                                        <td>Emanuel Macias</td>
                                        <td>FINALIZADO</td>
                                        <td>
                                            <i className="bi bi-pencil-square"></i> <i className="bi bi-trash-fill"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2021/12/03</td>
                                        <td>19:00</td>
                                        <td>04 Corte de cabello</td>
                                        <td>$33.000</td>
                                        <td>Leonar Perez</td>
                                        <td>Emanuel</td>
                                        <td>FINALIZADO</td>
                                        <td><i className="bi bi-pencil-square"></i> <i className="bi bi-trash-fill"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2021/12/03</td>
                                        <td>19:00</td>
                                        <td>04 Corte de cabello</td>
                                        <td>$33.000</td>
                                        <td>Leonar Perez</td>
                                        <td>Emanuel</td>
                                        <td>FINALIZADO</td>
                                        <td><i className="bi bi-pencil-square"></i> <i className="bi bi-trash-fill"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2021/12/03</td>
                                        <td>19:00</td>
                                        <td>04 Corte de cabello</td>
                                        <td>$33.000</td>
                                        <td>Leonar Perez</td>
                                        <td>Emanuel</td>
                                        <td>FINALIZADO</td>
                                        <td><i className="bi bi-pencil-square"></i> <i className="bi bi-trash-fill"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2021/12/03</td>
                                        <td>19:00</td>
                                        <td>04 Corte de cabello</td>
                                        <td>$33.000</td>
                                        <td>Leonar Perez</td>
                                        <td>Emanuel</td>
                                        <td>FINALIZADO</td>
                                        <td><i className="bi bi-pencil-square"></i> <i className="bi bi-trash-fill"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2021/12/03</td>
                                        <td>19:00</td>
                                        <td>04 Corte de cabello</td>
                                        <td>$33.000</td>
                                        <td>Leonar Perez</td>
                                        <td>Emanuel</td>
                                        <td>FINALIZADO</td>
                                        <td><i className="bi bi-pencil-square"></i> <i className="bi bi-trash-fill"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2021/12/03</td>
                                        <td>19:00</td>
                                        <td>04 Corte de cabello</td>
                                        <td>$33.000</td>
                                        <td>Leonar Perez</td>
                                        <td>Emanuel</td>
                                        <td>FINALIZADO</td>
                                        <td><i className="bi bi-pencil-square"></i> <i className="bi bi-trash-fill"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-center fw-bolder"><h3>Reportes</h3></div>
                    <div className="d-flex justify-content-lg-end" style={{alignItems:'center'}}>
                        <label for="">USUARIOS ATENDIDOS</label>
                        <div className="col-lg-2"></div>
                        <label for="colFormLabelExample" className="col-sm-1 col-form-label fw-bolder rounded-2 d-flex justify-content-center" style={{backgroundColor:'#C4C4C4'}}>Buscar</label>
                        <div className="col-sm-2">
                            <input className="form-control form-control" id="colFormLabelExample" placeholder="Búsqueda"/>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-sm-responsive" style={{color:'black', width:'100%', alignContent:'center'}} >
                            <thead style={{backgroundColor:'#343a40', color:'white'}}>
                                <tr>                                            
                                    <th>FECHA</th>
                                    <th>HORA</th>
                                    <th>SERVICIO</th>
                                    <th>CLIENTE</th>
                                    <th>TOTAL</th>
                                    <th></th>                                                         
                                </tr>
                            </thead>
                            <tbody style={{backgroundColor:'#C4C4C4'}}>
                                <tr>
                                    <td>2021/12/02</td>
                                    <td>17:30</td>
                                    <td><select className="form-select" aria-label="select example">
                                        <option>Todos los servicios</option>
                                        <option>01 corte + lavado + peinado</option>
                                        <option>02 cabello rapado</option>
                                        <option>03 corte de cabello para niños</option>
                                        </select></td>
                                    <td><select className="form-select" aria-label="select example">
                                        <option>Todos los clientes</option>
                                        <option>Victor Hugo Correa</option>
                                        <option>Johan Alexis Bedoya</option>
                                        <option>Robinson Losada</option>
                                        </select></td>
                                    <td>$330.000</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                                <tr>
                                    <td>2021/12/03</td>
                                    <td>18:00</td>
                                    <td><select className="form-select" aria-label="select example">
                                        <option>Todos los servicios</option>
                                        <option>01 corte + lavado + peinado</option>
                                        <option>02 cabello rapado</option>
                                        <option>03 corte de cabello para niños</option>
                                        </select></td>
                                    <td><select className="form-select" aria-label="select example">
                                        <option>Todos los clientes</option>
                                        <option>Carlos Alexander Rodriguez</option>
                                        <option>Raul Rodriguez</option>
                                        <option>Camilo Andrés Guetio</option>
                                        <option>Juan Esteban Panameño</option>
                                        </select></td>
                                    <td>$530.000</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-lg-end" style={{alignItems:'center'}}>
                        <label for="">INGRESOS</label>
                        <div className="col-lg-2"></div>
                        <label for="colFormLabelExample" className="col-sm-1 col-form-label fw-bolder rounded-2 d-flex justify-content-center" style={{backgroundColor:'#C4C4C4'}}>Buscar</label>
                        <div className="col-sm-2">
                            <input className="form-control form-control" id="colFormLabelExample" placeholder="Búsqueda"/>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table" style={{color:'black', width:'100%', alignContent:'center'}}  >
                            <thead style={{backgroundColor:'#343a40', color:'white'}}>
                                <tr>                                            
                                    <th>FECHA</th>
                                    <th>INGRESOS</th>
                                    <th></th>
                                    <th>SERVICIO</th>
                                    <th>INGRESOS</th>
                                    <th></th>                                                         
                                </tr>
                            </thead>
                            <tbody style={{backgroundColor:'#C4C4C4'}}>
                                <tr>
                                    <td>2021/12/02</td>
                                    <td>$330.000</td>
                                    <td><i className="bi bi-printer"></i></td>
                                    <td><select className="form-select" aria-label="select example">
                                        <option>Todos los servicios</option>
                                        <option>01 corte + lavado + peinado</option>
                                        <option>02 cabello rapado</option>
                                        <option>03 corte de cabello para niños</option>
                                      </select></td>
                                    <td>$33.000</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                                <tr>
                                    <td>2021/12/03</td>
                                    <td>$330.000</td>
                                    <td><i className="bi bi-printer"></i></td>
                                    <td><select className="form-select" aria-label="select example">
                                        <option>Todos los servicios</option>
                                        <option>01 corte + lavado + peinado</option>
                                        <option>02 cabello rapado</option>
                                        <option>03 corte de cabello para niños</option>
                                      </select></td>
                                    <td>$66.000</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-lg-end" style={{alignItems:'center'}}>
                        <label for="">AGENDA DISPONIBLE</label>
                        <div className="col-lg-2"></div>
                        <label for="colFormLabelExample" className="col-sm-1 col-form-label fw-bolder rounded-2 d-flex justify-content-center" style={{backgroundColor:'#C4C4C4'}}>Buscar</label>
                        <div className="col-sm-2">
                            <input className="form-control form-control" id="colFormLabelExample" placeholder="Búsqueda"/>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table" style={{color:'black', width:'100%', alignContent:'center'}}>
                            <thead style={{backgroundColor:'#343a40', color:'white'}}>
                                <tr>                                            
                                    <th>FECHA</th>
                                    <th>HORA</th>
                                    <th>SERVICIOS</th>
                                    <th>EMPLEADO</th>
                                    <th><i className="bi bi-printer"></i></th>                                                         
                                </tr>
                            </thead>
                            <tbody style={{backgroundColor:'#C4C4C4'}}>
                                <tr>
                                    <td>2021/12/04</td>
                                    <td>14:30</td>
                                    <td>01 corte + lavado + peinado</td>
                                    <td>Leonar Perez</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                                <tr>
                                    <td>2021/12/04</td>
                                    <td>15:00</td>
                                    <td>01 corte + lavado + peinado</td>
                                    <td>Leonar Perez</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                                <tr>
                                    <td>2021/12/04</td>
                                    <td>15:00</td>
                                    <td>01 corte + lavado + peinado</td>
                                    <td>Jorge Luis Curiel</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                                <tr>
                                    <td>2021/12/04</td>
                                    <td>15:30</td>
                                    <td>01 corte + lavado + peinado</td>
                                    <td>Leonar Perez</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                                <tr>
                                    <td>2021/12/04</td>
                                    <td>15:30</td>
                                    <td>01 corte + lavado + peinado</td>
                                    <td>Jorge Luis Curiel</td>
                                    <td><i className="bi bi-printer"></i></td>
                                </tr>
                                <tr>
                                    <td>2021/12/04</td>
                                    <td>16:00</td>
                                    <td>01 corte + lavado + peinado</td>
                                    <td>Leonar Perez</td>
                                    <td><i className="bi bi-printer"></i></td>
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
