import {Link} from "react-router-dom";
function Servicios() {
  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Header-->*/}
        <header className="bg-dark">
          <img
            src={process.env.PUBLIC_URL + '/img/servicios.jpg'}
            alt=""
            width="100%"
          />
        </header>
        {/*<!-- Features section-->*/}
        <section className="py-2" id="features">
          <div className="container px-5 my-10">
            <div className="fs-10 py-2 text-center">
              <img src={process.env.PUBLIC_URL + 'img/corbatin.jpg'} alt="" />
            </div>
            <div className="text-center mb-5">
              <h2 className="fw-bolder">Nuestros Servicios</h2>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-lg-4">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src={process.env.PUBLIC_URL + 'img/cortecabello.jpg'}
                    alt="..."
                    width="200"
                  />
                  <br />
                  <p className="fw-bolder">Corte de cabello</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src={process.env.PUBLIC_URL + 'img/diseñobarba.jpg'}
                    alt="..."
                    width="200"
                    height="200"
                  />
                  <br />
                  <p className="fw-bolder">Diseño de barba</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src={process.env.PUBLIC_URL + 'img/tintecabello.jpg'}
                    alt="..."
                    width="200"
                    height="200"
                  />
                  <br />
                  <p className="fw-bolder">Tinte para cabello</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src={process.env.PUBLIC_URL + 'img/manicure.jpg'}
                    alt="..."
                    width="200"
                  />
                  <br />
                  <p className="fw-bolder">Manicure y pedicure</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src={process.env.PUBLIC_URL + 'img/mascarilla.jpg'}
                    alt="..."
                    width="200"
                  />
                  <br />
                  <p className="fw-bolder">Limpieza facial, nariz y oidos</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Features section-->*/}
        <section className="py-2" id="features">
          <div className="container px-5 my-10">
            <div className="py-2 text-center">
              <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                  <div className="col-lg-10 col-xl-7">
                    <div className="text-center">
                      <div className="row py-5">
                        <div className="col mb-5 h-100">
                          <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3">
                            <i class="bi bi-clock"></i>
                          </div>
                          <h2 className="h5">HORARIOS</h2>
                          <p className="mb-0">10:00 am a 8:00 pm</p>
                        </div>
                        <div className="col mb-5 h-100">
                          <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3">
                            <i class="bi bi-house"></i>
                          </div>
                          <h2 className="h5">SEDE</h2>
                          <p className="mb-0">Cll 2A #66-34 Medellin</p>
                        </div>
                        <div className="col mb-5 h-100">
                          <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3">
                            <i class="bi bi-telephone"></i>
                          </div>
                          <h2 className="h5">CONTACTO</h2>
                          <p className="mb-0">3009000800</p>
                        </div>
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
export default Servicios;
