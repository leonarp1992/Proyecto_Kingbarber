function QuienesSomos() {
  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Header-->*/}
        <header className="bg-dark">
          <img
            src={process.env.PUBLIC_URL + '/img/quienessomos.jpg'}
            alt=""
            width="100%"
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
                        En King Barber contamos con 10 años de experiencia
                        prestando los mejores servicios para caballeros,
                        enfocados en mejorar el estilo de cada uno de nuestros
                        clientes. Mezclamos un estilo old school con los nuevos
                        estilos, logrando así una experiencia única y auténtica,
                        como lo eres tú. Ofrecemos un menú de servicios para
                        hombre que incluye corte, afeitada con toalla caliente,
                        coloración, masajes, tratamientos faciales, depilación
                        con cera, manicure y pedicure, entre otros. Nuestra
                        obsesión es brindar un servicio destacado al cliente,
                        por eso el nivel y energía de nuestro staff son
                        fundamentales para lograr el objetivo principal... ¡tu
                        entera satisfacción!.
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
export default QuienesSomos;
