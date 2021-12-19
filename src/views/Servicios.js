import {Link} from 'react-router-dom';

function Servicios() {

  return (
    <div>
      <main className="flex-shrink-0">
        {/* <!-- Features section--> */}
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-4">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={process.env.PUBLIC_URL + '/img/tintecabello.jpg'}
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Coloración de cabello o barba</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Cubrimos esas canas que tanto te molestan o le damos un nuevo
                  look a tu cabello.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="container px-5 my-5">
            <div className="text-center">
              <h3 className="fw-bolder">Reservas</h3>
              <br />
            </div>
            <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">Mechas</div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$60000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i cclassNamelass="bi bi-clock"></i>
                        <strong>100 - 180 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Coloración de pelo
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$70000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>90 - 120 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Corte + coloración
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$90000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>130 - 150 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-4">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={process.env.PUBLIC_URL + '/img/cortecabello.jpg'}
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Corte de cabello</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Tenemos un entrenamiento constante de las tendencias de corte,
                  además de la experiencia del equipo de peluqueros, que están
                  en un promedio de 12 años de experiencia. No paramos de
                  investigar, documentarnos y entrenarnos en todo lo relacionado
                  con corte, de hombres y niños.
                </p>
              </div>
            </div>
          </div>
          <div className="container px-5 my-5">
            <div className="text-center">
              <h3 className="fw-bolder">Reservas</h3>
              <br />
            </div>
            <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Corte + peinado
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$33000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i cclassNamelass="bi bi-clock"></i>
                        <strong>30 - 50 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Corte + Lavado + Peinado
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$35000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>40 - 60 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">Rapado</div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$24000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>15 - 20 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <a className="btn btn-outline-dark" href="#!">
                        Reservar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">Corte Niños</div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$33000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>35 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-4">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={process.env.PUBLIC_URL + '/img/diseñobarba.jpg'}
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Diseño Barba</h2>
                <p className="lead fw-normal text-muted mb-0">
                  ¡La perfecta introducción para una afeitada profesional!
                  Comenzamos con una perfecta pulida de tu barba, luego la
                  agradable sensación de nuestra espuma y toalla caliente para
                  sentir como empieza a deslizarse la cuchilla en en tu piel.
                  Toalla fría y gel refrescante para culminar con nuestro aceite
                  para barba el cual agrega la fragancia y brillo a tu increíble
                  barba.
                </p>
              </div>
            </div>
          </div>
          <div className="container px-5 my-5">
            <div className="text-center">
              <h3 className="fw-bolder">Reservas</h3>
              <br />
            </div>
            <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">Perfilado</div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$24000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i cclassNamelass="bi bi-clock"></i>
                        <strong>10 - 20 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Recorte + Perfilado
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$33000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>30 - 40 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">Afeitado</div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$35000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>30 - 40 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Recorte + Perfilado + Tinte
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$68000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>50 - 60 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-4">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={process.env.PUBLIC_URL + '/img/mascarilla.jpg'}
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Limpieza facial, nariz y oido</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Realizamos una exfoliación aplicando una mascarilla especial
                  desintoxicante y ofrecemos limpieza con cera de forma rapida y
                  sin dolor bajo asesoria por parte de un profesional.
                </p>
              </div>
            </div>
          </div>
          <div className="container px-5 my-5">
            <div className="text-center">
              <h3 className="fw-bolder">Reservas</h3>
              <br />
            </div>
            <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Limpieza facial
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$33000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>20 - 30 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Limpieza nariz y oidos
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$20000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>20 - 30 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-4">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={process.env.PUBLIC_URL + '/img/manicure.jpg'}
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Manicure y pedicure</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Incluye masaje de pies y manos.
                </p>
              </div>
            </div>
          </div>
          <div className="container px-5 my-5">
            <div className="text-center">
              <h3 className="fw-bolder">Reservas</h3>
              <br />
            </div>
            <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">Manicure</div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$15000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i cclassNamelass="bi bi-clock"></i>
                        <strong>45 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">Pedicure</div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$30000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>75 - 90 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-6">
                    <div className="small fw-bold text-muted">
                      Manicure + Pedicure
                    </div>
                    <div className="mb-3">
                      <span className="display-6 fw-bold">$30000</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-clock"></i>
                        <strong>75 - 90 minutos</strong>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/reservar" className="btn btn-outline-dark">
                        Reservar
                      </Link>
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
export default Servicios;
