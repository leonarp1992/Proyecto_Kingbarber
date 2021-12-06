import {Link} from "react-router-dom";
function App3() {
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
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/quienessomos" className="nav-link">¿Quiénes Somos?</Link></li>
                            <li className="nav-item"><Link to="/servicios" className="nav-link">Servicios</Link></li>
                            <li className="nav-item dropdown">
                                <Link to="" className="nav-link dropdown-toggle" id="navbarDropdownBlog" role="button" data-bs-toggle="dropdown" aria-expanded="false">Agenda Tu Cita</Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><Link to="/" className="dropdown-item" >Corte de cabello</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Diseño de barba</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Coloración de cabello o barba</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Manicure y pedicure</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Limpieza facial, nariz y oido</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a class="nav-link" href="login.html">Inicia Sesión</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*<!-- Header-->*/}
            <header className="bg-dark">
                <img src={process.env.PUBLIC_URL + "/img/servicios.jpg"} alt="" width="100%"/>
            </header>
            {/*<!-- Features section-->*/}
            <section className="py-2" id="features">
                <div className="container px-5 my-10">
                    <div className="fs-10 py-2 text-center">
                        <img src={process.env.PUBLIC_URL + "img/corbatin.jpg"} alt=""/>
                    </div>
                    <div className="text-center mb-5">
                        <h2 className="fw-bolder">Nuestros Servicios</h2>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-4">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src={process.env.PUBLIC_URL + "img/cortecabello.jpg"} alt="..." width="200"/><br/>
                                <p className="fw-bolder">Corte de cabello</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src={process.env.PUBLIC_URL + "img/diseñobarba.jpg"} alt="..." width="200" height="200"/><br/>
                                <p className="fw-bolder">Diseño de barba</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src={process.env.PUBLIC_URL + "img/tintecabello.jpg"} alt="..." width="200" height="200"/><br/>
                                <p className="fw-bolder">Tinte para cabello</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src= {process.env.PUBLIC_URL + "img/manicure.jpg"} alt="..." width="200"/><br/>
                                <p className="fw-bolder">Manicure y pedicure</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src={process.env.PUBLIC_URL + "img/mascarilla.jpg"} alt="..." width="200"/><br/>
                                <p className="fw-bolder">Limpieza facial, nariz y oidos</p>
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
export default App3;
