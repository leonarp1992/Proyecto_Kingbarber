function EmpleadosUi() {
  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Features section-->*/}
        <section>
          <div className="panel-body" style={{ margin: '5%' }}>
            <div
              className="d-flex justify-content-center"
              style={{ color: 'white' }}
            >
              <h3>PERSONAL BARBERÍA</h3>
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
                    <th>NOMBRES</th>
                    <th>APELLIDOS</th>
                    <th>CARGO</th>
                    <th>FUNCIONES</th>
                    <th>CELULAR</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                  <tr>
                    <td>Alejandra</td>
                    <td>Negrete Urango</td>
                    <td>Estilista</td>
                    <td>Manicula, Pedicura</td>
                    <td>3001002711</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Leonar</td>
                    <td>Perez</td>
                    <td>Barbero</td>
                    <td>Corte/diseño de cabello/barba</td>
                    <td>3125359893</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Jorge Luis</td>
                    <td>Curiel</td>
                    <td>Barbero</td>
                    <td>Corte/diseño de cabello/barba</td>
                    <td>3123424443</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Yorly Roxanna</td>
                    <td>Catuche</td>
                    <td>Estilista</td>
                    <td>Tinte, diseño cejas</td>
                    <td>3007001624</td>
                    <td>
                      <i className="bi bi-pencil-square"></i>{' '}
                      <i className="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                    <th>NOMBRES</th>
                    <th>APELLIDOS</th>
                    <th>CARGO</th>
                    <th>FUNCIONES</th>
                    <th>CELULAR</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                  <tr>
                    <td>Jorge</td>
                    <td>Benavides</td>
                    <td></td>
                    <td></td>
                    <td></td>
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
    </div>
  );
}
export default EmpleadosUi;