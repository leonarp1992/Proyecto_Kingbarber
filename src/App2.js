import {Link} from "react-router-dom";
function App2() {
  return (
  <div>
    <main className="flex-shrink-0">
            {/*<!-- Navigation-->*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt ="" width="90" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="quienessomos.html">¿Quiénes Somos?</a></li>
                            <li className="nav-item"><a className="nav-link" href="servicios.html">Servicios</a></li>
                            <li className="nav-item dropdown">
                                <Link to="" className="nav-link dropdown-toggle" id="navbarDropdownBlog" role="button" data-bs-toggle="dropdown" aria-expanded="false">Agenda Tu Cita</Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><Link to="" className="dropdown-item" >Corte de cabello</Link></li>
                                    <li><Link to="" className="dropdown-item" >Diseño de barba</Link></li>
                                    <li><Link to="" className="dropdown-item" >Coloración de cabello o barba</Link></li>
                                    <li><Link to="" className="dropdown-item" >Manicure y pedicure</Link></li>
                                    <li><Link to="" className="dropdown-item" >Limpieza facial, nariz y oido</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a class="nav-link" href="login.html">Inicia Sesión</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*<!-- Header-->*/}
            <header className="bg-dark">
                <img src={process.env.PUBLIC_URL + "/img/quienessomos.jpg"} alt="" width="100%"/>
            </header>
            {/*<!-- Features section-->*/}
            <section className="py-2" id="features">
                <div className="container px-5 my-10">
                    <div className="py-2 text-center">
                        <div className="container px-5 my-5">
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-10 col-xl-7">
                                    <div className="text-center">
                                        <div className="fs-5 mb-4 fst-italic">En King Barber contamos con 10 años de experiencia prestando los mejores servicios para caballeros,  enfocados en mejorar el estilo de cada uno de nuestros clientes.
                                            Mezclamos un estilo old school con los nuevos estilos, logrando así una experiencia única y auténtica, como lo eres tú.
                                            Ofrecemos un menú de servicios para hombre que incluye corte, afeitada con toalla caliente, coloración, masajes, tratamientos faciales, depilación con cera, manicure y pedicure, entre otros.
                                            Nuestra obsesión es brindar un servicio destacado al cliente, por eso el nivel y energía de nuestro staff son fundamentales para lograr el objetivo principal... ¡tu entera satisfacción!.
                                        </div>
                                        <div className="fs-5 mb-4 fst-italic">¡Bienvenidos a King Barber !
                                        </div>
                                        <div className="py-1 text-center">
                                            <img src={process.env.PUBLIC_URL + "/img/bigotes.png"} alt="" width="150"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map-responsive ">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.465999710763!2d-75.57452931883267!3d6.196158054513901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d9881ad31bfbf97!2sKing%20Barber!5e0!3m2!1ses!2sco!4v1638055903695!5m2!1ses!2sco"  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                    </div>

                    <div className="row text-center">
                        <div className="col mb-5 h-100">
                            <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-geo-alt"></i></div>
                            <h2 className="h5">EL PROBLADO</h2>
                            <p className="mb-0">Centro Comercial Santafé / Carrera 43a, Calle 7 Sur - 170 / Local 1-120</p>
                        </div>
                        <div className="col mb-5 h-100">
                            <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-telephone"></i></div>
                            <h2 className="h5">TELÉFONO</h2>
                            <p className="mb-0">3009000800</p>
                        </div>
                        <div className="col mb-5 h-100">
                            <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h2 className="h5">CORREO</h2>
                            <p className="mb-0">king_barber@barbershop.com</p>
                        </div>
                    </div>
                </div>
            </section> 
        </main>
        {/*<!-- Footer-->*/}
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">Copyright 2021 &copy; MisionTIC 2022</div></div>
                    <div className="col-auto">
                        <a className="link-light small" href="#!"><i className="bi bi-instagram"> @barberking</i></a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!"><i className="bi bi-facebook"> BarbeKing</i></a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!"><i className="bi bi-whatsapp"> 3009000800</i></a>
                    </div>
                </div>
            </div>
        </footer>
        {/*<!-- Bootstrap core JS-->*/}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/*<!-- Core theme JS-->*/}
        <script src={process.env.PUBLIC_URL + "/js/scripts.js"}></script>
  </div>
  );
}
export default App2;
