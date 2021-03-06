function Home() {
  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Header-->*/}
        <header className="bg-dark">
          <img
            src={process.env.PUBLIC_URL + '/img/index.jpg'}
            alt="index"
            style={{ width: '100%' }}
          />
        </header>

        {/*<!-- Features section-->*/}
        <section className="py-2" id="features">
          <div className="container px-5 my-10">
            <div className="py-2 text-center">
              <img
                src={process.env.PUBLIC_URL + '/img/tijera.jpg'}
                alt="container"
              />
              <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                  <div className="col-lg-10 col-xl-7">
                    <div className="text-center">
                      <div className="fs-4 mb-4 fst-italic">
                        Lograr que usted viva una experiencia desde su llegada
                        hasta que se retira de nuestra Barbería, es nuestro
                        compromiso y objetivo. Proveemos un servicio de
                        excelencia en calidad humana y profesional. Lo invitamos
                        a conocernos.
                      </div>
                      <div className="row py-5">
                        <div className="col mb-5 h-100">
                          <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-clock"></i>
                          </div>
                          <h2 className="h5">HORARIOS</h2>
                          <p className="mb-0">10:00 am a 8:00 pm</p>
                        </div>
                        <div className="col mb-5 h-100">
                          <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-house"></i>
                          </div>
                          <h2 className="h5">SEDE</h2>
                          <p className="mb-0">Cll 2A #66-34 Medellin</p>
                        </div>
                        <div className="col mb-5 h-100">
                          <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-telephone"></i>
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
    </div>
  );
}
export default Home;
