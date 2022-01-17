function ReservasUi() {
  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Features section-->*/}
        <section>
          <div className="" style={{ margin: '5%' }}>
            <div className="row">
              <div className="col-lg-6 col-xl">
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default ReservasUi;
