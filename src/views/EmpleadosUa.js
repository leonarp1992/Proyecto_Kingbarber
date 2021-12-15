function EmpleadosUa() {
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
                    <th>DOCUMENTO</th>
                    <th>NOMBRES</th>
                    <th>APELLIDOS</th>
                    <th>CARGO</th>
                    <th colspan="2" style={{ textAlign: 'center' }}>
                      FUNCIONES
                    </th>
                    <th>CELULAR</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#C4C4C4' }}>
                  <tr>
                    <td>CC: 2312344473</td>
                    <td>Alejandra</td>
                    <td>Negrete Urango</td>
                    <td>Estilista</td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Activos</option>
                        <option value="caja">Caja</option>
                        <option>01</option>
                        <option>03</option>
                        <option>06</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Agregar</option>
                        <option value="caja">Caja</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                      </select>
                    </td>
                    <td>3001002711</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>CC: 1018374629</td>
                    <td>Leonar</td>
                    <td>Perez</td>
                    <td>Barbero</td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Activos</option>
                        <option value="caja">Caja</option>
                        <option>01</option>
                        <option>03</option>
                        <option>06</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Agregar</option>
                        <option value="caja">Caja</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                      </select>
                    </td>
                    <td>3125359893</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>CC: 10618836208</td>
                    <td>Jorge Luis</td>
                    <td>Curiel</td>
                    <td>Barbero</td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Activos</option>
                        <option value="caja">Caja</option>
                        <option>01</option>
                        <option>03</option>
                        <option>06</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Agregar</option>
                        <option value="caja">Caja</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                      </select>
                    </td>
                    <td>3123424443</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>CC: 345637770</td>
                    <td>Yorly Roxanna</td>
                    <td>Catuche</td>
                    <td>Estilista</td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Activos</option>
                        <option value="caja">Caja</option>
                        <option>01</option>
                        <option>03</option>
                        <option>06</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Agregar</option>
                        <option value="caja">Caja</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                      </select>
                    </td>
                    <td>3007001624</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center fw-bolder">
              <h3>Agregar empleado</h3>
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
                    <th>DOCUMENTO</th>
                    <th>NOMBRES</th>
                    <th>APELLIDOS</th>
                    <th>CARGO</th>
                    <th>FUNCIONES</th>
                    <th>CELULAR</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#C4C4C4' }}>
                  <tr>
                    <td>CC:1030402942</td>
                    <td>Jorge</td>
                    <td>Benavides</td>
                    <td>Cajero</td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="select example"
                      >
                        <option>Agregar</option>
                        <option value="caja">Caja</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                      </select>
                    </td>
                    <td>3128431021</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
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
export default EmpleadosUa;