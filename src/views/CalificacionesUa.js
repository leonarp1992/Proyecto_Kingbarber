import { Link } from 'react-router-dom';

function CalificacionesUa() {
  return (
    <div>
      <main className="flex-shrink-0">
      {/*<!-- Features section-->*/}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Nuestros clientes</h1>
              <p className="lead fw-normal text-muted mb-0">
                Calificación - Comentarios
              </p>
            </div>
            <div className="row gx-5">
              <div className="col-xl-8">
                {/*<!-- FAQ Accordion 1-->*/}
                <h2 className="fw-bolder mb-3">Promedio Calificaciones</h2>
                <div className="accordion mb-5" id="accordionExample">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Promedio
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse show"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Nuestro promedio de Calificaciones
                        <strong>
                          4,6 <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Detalle
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        34 clientes calificaron
                        <strong>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </strong>
                        <br />
                        23 clientes calificaron
                        <strong>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                        </strong>
                        <br />
                        26 clientes calificaron
                        <strong>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                        </strong>
                        <br />
                        12 clientes calificaron
                        <strong>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                        </strong>
                        <br />
                        21 clientes calificaron
                        <strong>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- FAQ Accordion 2-->*/}
                <h2 className="fw-bolder mb-3">Comentarios</h2>
                <div className="accordion mb-5 mb-xl-0" id="accordionExample2">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Felicitaciones
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse show"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <strong>1.</strong>
                        Excelente Servicio
                        <br />
                        <strong>2.</strong>
                        Muy puntuales
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Sugerencias
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <strong>1.</strong>
                        Quisiera poder cancelar la cita con menos horas de
                        anticipación
                        <br />
                        <strong>2.</strong>
                        Me gustaría tener la comprobación de la cita en también
                        en whatsapp
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Reclamos
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <strong>1.</strong>
                        No me gusta que le den prioridad a la agenda
                        <br />
                        <strong>2.</strong>
                        El servicio es bueno pero demasiado lento
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card border-0 bg-light mt-xl-5">
                  <div className="card-body p-4 py-lg-5">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="text-center">
                        <div className="h6 fw-bolder">Otros comentarios</div>
                        <div className="h6 fw-bolder">Nuestras Redes</div>
                        <a className="fs-5 px-2 link-dark" href="#!">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a className="fs-5 px-2 link-dark" href="#!">
                          <i className="bi-facebook"></i>
                        </a>
                        <a className="fs-5 px-2 link-dark" href="#!">
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
export default CalificacionesUa;
