function ReservasUi() {
  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Features section-->*/}
        <section>
          <div className="panel-body" style={{ margin: '5%' }}>
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div
                  className="d-flex justify-content-center"
                  style={{ color: 'white' }}
                >
                  <h3>PERSONAL BARBERÍA</h3>
                </div>
                <table
                  className="table table-sm-responsive"
                  style={{
                    color: 'black',
                    width: '100%',
                    alignContent: 'center',
                  }}
                >
                  <thead style={{ backgroundColor: '#C4C4C4' }}>
                    <tr>
                      <th>EMPLEADO</th>
                      <th colspan="2" style={{ textAlign: 'center' }}>
                        SERVICIOS
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: 'white' }}>
                    <tr>
                      <td>Alejandra Negrete</td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Activos</option>
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Agregar</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Leonar Perez</td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Activos</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Agregar</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Jorge Luis Curiel</td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Activos</option>
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
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div
                  className="d-flex justify-content-center"
                  style={{ color: 'white' }}
                >
                  <h3>CREAR AGENDA</h3>
                </div>
                <table
                  className="table table-sm-responsive"
                  style={{
                    color: 'white',
                    width: '100%',
                    alignContent: 'center',
                  }}
                >
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: '#C4C4C4' }}>SERVICIO</th>
                      <td style={{ backgroundColor: 'white' }}>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Seleccione una opción</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ backgroundColor: '#C4C4C4' }}>EMPLEADO</th>
                      <td style={{ backgroundColor: 'white' }}>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Seleccione una opción</option>
                          <option>Alejandra Negrete Urango</option>
                          <option>Leonar Perez</option>
                          <option>Jorge Luis Curiel</option>
                          <option>Yorly Roxanna Catuche</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ backgroundColor: '#C4C4C4' }}>FECHA</th>
                      <td style={{ backgroundColor: 'white' }}>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Seleccione una opción</option>
                          <option>2021/12/04</option>
                          <option>2021/12/05</option>
                          <option>2021/12/06</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ backgroundColor: '#C4C4C4' }}>HORA</th>
                      <td style={{ backgroundColor: 'white' }}>
                        <select
                          className="form-select"
                          aria-label="select example"
                        >
                          <option>Seleccione una opción</option>
                          <option>08:00</option>
                          <option>08:30</option>
                          <option>09:00</option>
                        </select>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ color: 'white' }}
            >
              <h3>AGENDA DE SERVICIOS</h3>
            </div>

            <div
              className="d-flex justify-content-lg-end"
              style={{ alignItems: 'center' }}
            >
              <label
                for="colFormLabelExample"
                className="col-sm-1 col-form-label fw-bolder rounded-2 d-flex justify-content-center"
                style={{ backgroundColor: '#C4C4C4' }}
              >
                Buscar
              </label>
              <div className="col-sm-2">
                <input
                  type="email"
                  className="form-control form-control"
                  id="colFormLabelExample"
                  placeholder="Búsqueda"
                />
              </div>
            </div>
            <div className="justify-content-center">
              <div
                className="table-responsive"
                style={{ justifyContent: 'center' }}
              >
                <table
                  className="table table-responsive-xxl"
                  style={{
                    color: 'black',
                    width: '100%',
                    alignContent: 'center',
                  }}
                >
                  <thead style={{ backgroundColor: '#C4C4C4' }}>
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
                  <tbody style={{ backgroundColor: 'white' }}>
                    <tr>
                      <td>2021/12/03</td>
                      <td>19:00</td>
                      <td>04 Corte de cabello</td>
                      <td>$33.000</td>
                      <td>Leonar Perez</td>
                      <td>Emanuel Macias</td>
                      <td>FINALIZADO</td>
                      <td>
                        <i className="bi bi-pencil-square"></i>{' '}
                        <i className="bi bi-trash-fill"></i>
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
                      <td>
                        <i class="bi bi-pencil-square"></i>{' '}
                        <i class="bi bi-trash-fill"></i>
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
                      <td>
                        <i className="bi bi-pencil-square"></i>{' '}
                        <i className="bi bi-trash-fill"></i>
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
                      <td>
                        <i className="bi bi-pencil-square"></i>{' '}
                        <i className="bi bi-trash-fill"></i>
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
                      <td>
                        <i className="bi bi-pencil-square"></i>{' '}
                        <i className="bi bi-trash-fill"></i>
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
                      <td>
                        <i className="bi bi-pencil-square"></i>{' '}
                        <i className="bi bi-trash-fill"></i>
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
                      <td>
                        <i className="bi bi-pencil-square"></i>{' '}
                        <i className="bi bi-trash-fill"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="d-flex justify-content-center"
              style={{ color: 'white' }}
            >
              <h3>REPORTES</h3>
            </div>
            <div
              className="d-flex justify-content-lg-end"
              style={{ alignItems: 'center' }}
            >
              <label for="" style={{ color: '#ffffff' }}>
                USUARIOS ATENDIDOS
              </label>
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
                <thead style={{ backgroundColor: '#C4C4C4' }}>
                  <tr>
                    <th>FECHA</th>
                    <th>HORA</th>
                    <th>SERVICIO</th>
                    <th>CLIENTE</th>
                    <th>TOTAL</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
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
              <label for="" style={{ color: '#ffffff' }}>
                INGRESOS
              </label>
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
                <thead style={{ backgroundColor: '#C4C4C4' }}>
                  <tr>
                    <th>FECHA</th>
                    <th>INGRESOS</th>
                    <th></th>
                    <th>SERVICIO</th>
                    <th>INGRESOS</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
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
            <div
              className="d-flex justify-content-lg-end"
              style={{ alignItems: 'center' }}
            >
              <label for="" style={{ color: '#ffffff' }}>
                AGENDA DISPONIBLE
              </label>
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
                <thead style={{ backgroundColor: '#C4C4C4' }}>
                  <tr>
                    <th>FECHA</th>
                    <th>HORA</th>
                    <th>SERVICIOS</th>
                    <th>EMPLEADO</th>
                    <th>
                      <i className="bi bi-printer"></i>
                    </th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                  <tr>
                    <td>2021/12/04</td>
                    <td>14:30</td>
                    <td>01 corte + lavado + peinado</td>
                    <td>Leonar Perez</td>
                    <td>
                      <i className="bi bi-printer"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2021/12/04</td>
                    <td>15:00</td>
                    <td>01 corte + lavado + peinado</td>
                    <td>Leonar Perez</td>
                    <td>
                      <i className="bi bi-printer"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2021/12/04</td>
                    <td>15:00</td>
                    <td>01 corte + lavado + peinado</td>
                    <td>Jorge Luis Curiel</td>
                    <td>
                      <i className="bi bi-printer"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2021/12/04</td>
                    <td>15:30</td>
                    <td>01 corte + lavado + peinado</td>
                    <td>Leonar Perez</td>
                    <td>
                      <i className="bi bi-printer"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2021/12/04</td>
                    <td>15:30</td>
                    <td>01 corte + lavado + peinado</td>
                    <td>Jorge Luis Curiel</td>
                    <td>
                      <i className="bi bi-printer"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2021/12/04</td>
                    <td>16:00</td>
                    <td>01 corte + lavado + peinado</td>
                    <td>Leonar Perez</td>
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
export default ReservasUi;
