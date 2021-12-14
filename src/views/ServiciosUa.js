import { Link } from 'react-router-dom';
function ServiciosUa() {
  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Navigation-->*/}
        {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt ="" width="90" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item"><Link to='/agendaua' className="nav-link" >Agenda</Link></li>
                          <li className="nav-item"><Link to='/calificacionesua' className="nav-link" >Calificaciones</Link></li>
                          <li className="nav-item"><Link to='/empleadosua' className="nav-link" >Empleados</Link></li>
                          <li className="nav-item"><Link to='/serviciosua' className="nav-link" >Servicios</Link></li>
                          <li className="nav-item"><Link to='/reportes' className="nav-link" >Reportes</Link></li>
                          <li className="nav-item"><Link to='/' className="nav-link" >Cerrar Sesión</Link></li>
                      </ul>
                </div>
            </div>
  </nav>*/}
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
                    <th>ID</th>
                    <th>SERVICIO</th>
                    <th>DESCRIPCIÓN</th>
                    <th>DURACIÓN</th>
                    <th>PRECIO</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#C4C4C4' }}>
                  <tr>
                    <td>01</td>
                    <td>Corte de cabello</td>
                    <td>Corte + lavado + peinado</td>
                    <td>45 minutos</td>
                    <td>$33.000</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Corte de cabello</td>
                    <td>Cabello rapado</td>
                    <td>33 minutos</td>
                    <td>$33.000</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Corte de cabello</td>
                    <td>Corte de cabello para niños</td>
                    <td>45 minutos</td>
                    <td>$33.000</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Corte de cabello</td>
                    <td>Corte de cabello + peinado</td>
                    <td>45 minutos</td>
                    <td>$33.000</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Diseño de barba</td>
                    <td>Corte de cabello + barba + cejas</td>
                    <td>45 minutos</td>
                    <td>$33.000</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Diseño de barba</td>
                    <td>Barba + cejas</td>
                    <td>45 minutos</td>
                    <td>$33.000</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>Diseño de barba</td>
                    <td>Tinte de barba</td>
                    <td>45 minutos</td>
                    <td>$33.000</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center fw-bolder">
              <h3>Agregar servicio</h3>
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
                    <th>ID</th>
                    <th>SERVICIO</th>
                    <th>DESCRIPCIÓN</th>
                    <th>DURACIÓN</th>
                    <th>PRECIO</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#C4C4C4' }}>
                  <tr>
                    <td>01</td>
                    <td>Corte de cabello</td>
                    <td>Corte + lavado + peinado</td>
                    <td>45 minutos</td>
                    <td>$33.000</td>
                    <td>
                      <i className="bi bi-check-square"></i>
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
export default ServiciosUa;
