function ServiciosUa() {
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
                      <i className="bi bi-pencil-square"></i>
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
                </tbody>
              </table>
            </div>
              <div className="d-flex justify-content-center fw-bolder">
                <h3>Agregar servicio</h3>
              </div>
            <div style={{backgroundColor:'#C4C4C4'}}>
              <div className="row">
                <div className="col-4" style={{margin:'1%'}}>
                  <input className="border border-1 border-dark" type="text" placeholder="Nombre del servicio"></input>
                </div>
                <div><br/></div>                      
                <div className="col-9" style={{margin:'1%'}}>
                  <input className="border border-1 border-dark" type="text" placeholder="Descripción del servicio"></input>
                </div>
                <div><br/></div>
                <div className="col-4" style={{margin:'1%'}}>
                  <input className="border border-1 border-dark" type="text" placeholder="Precio"></input>
                </div>
                <div className="col-4" style={{margin:'1%'}}>
                  <input className="border border-1 border-dark" type="text" placeholder="Duración"></input>
                </div>
                <div><br/></div>
                <div className="d-grid gap-2 col-4 mx-auto">
                  <input className="btn btn-secondary" type="button" value="Crear Servicio"></input>
                </div>
                <div><br/></div>
              </div>
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
