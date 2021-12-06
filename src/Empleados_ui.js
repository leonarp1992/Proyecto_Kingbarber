import {Link} from "react-router-dom";
function Empleados_ui() {
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
                            
                            <li className="nav-item dropdown">
                                <Link to="" class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Reportes</Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><Link to="" class="dropdown-item" href="blog-home.html">Crear Agenda</Link></li>
                                    <li><Link to="" class="dropdown-item" href="blog-post.html">Reportes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/empleados">Empleados</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/reservasui">Reservas</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="serviciosui">Servicios</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="">Cerrar Sesión</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            {/*<!-- Features section-->*/}
            <section>
                <div className="panel-body" style="margin: 5%;" >
                    <div className="d-flex justify-content-center" style="color:white;"><h3>PERSONAL BARBERÍA</h3></div>
                    <div className="table-responsive">
                        <table class="table table-sm-responsive" style="color: black; width:100%; align-content: center;" >
                            <thead style=" background-color:#C4C4C4;">
                                <tr>                                            
                                    <th>NOMBRES</th>
                                    <th>APELLIDOS</th>
                                    <th>CARGO</th>
                                    <th>FUNCIONES</th>
                                    <th>CELULAR</th>
                                    <th></th>                                                         
                                </tr>
                            </thead>
                            <tbody style="background-color: white;">
                                <tr>
                                    <td>Alejandra</td>
                                    <td>Negrete Urango</td>
                                    <td>Estilista</td>
                                    <td>Manicula, Pedicura</td>
                                    <td>3001002711</td>
                                    <td>
                                        <i class="bi bi-pencil-square"></i> <i class="bi bi-trash-fill"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Leonar</td>
                                    <td>Perez</td>
                                    <td>Barbero</td>
                                    <td>Corte/diseño de cabello/barba</td>
                                    <td>3125359893</td>
                                    <td><i class="bi bi-pencil-square"></i> <i class="bi bi-trash-fill"></i></td>
                                </tr>
                                <tr>
                                    <td>Jorge Luis</td>
                                    <td>Curiel</td>
                                    <td>Barbero</td>
                                    <td>Corte/diseño de cabello/barba</td>
                                    <td>3123424443</td>
                                    <td><i class="bi bi-pencil-square"></i> <i class="bi bi-trash-fill"></i></td>
                                </tr>
                                <tr>
                                    <td>Yorly Roxanna</td>
                                    <td>Catuche</td>
                                    <td>Estilista</td>
                                    <td>Tinte, diseño cejas</td>
                                    <td>3007001624</td>
                                    <td><i class="bi bi-pencil-square"></i> <i class="bi bi-trash-fill"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-center" style="color:white;"><h3>AGREGAR EMPLEADO</h3></div>
                    <div class="table-responsive">
                        <table class="table table-sm-responsive" style="color: black; width:100%; align-content: center;" >
                            <thead style=" background-color:#C4C4C4;">
                                <tr>                                            
                                    <th>NOMBRES</th>
                                    <th>APELLIDOS</th>
                                    <th>CARGO</th>
                                    <th>FUNCIONES</th>
                                    <th>CELULAR</th>
                                    <th></th>                                                         
                                </tr>
                            </thead>
                            <tbody style="background-color: white;">
                                <tr>
                                    <td>Jorge</td>
                                    <td>Benavides</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <i class="bi bi-pencil-square"></i> <i class="bi bi-trash-fill"></i>
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
export default Empleados_ui;