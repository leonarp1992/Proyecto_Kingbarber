import {Link} from 'react-router-dom';
function Registro() {
  return (
  <div>
    <main className="flex-shrink-0">
      {/*<!-- Navigation-->*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Logo" width="90"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/quienessomos" className="nav-link">¿Quiénes Somos?</Link></li>                        
                        <li className="nav-item"><Link to= "/servicios" className="nav-link">Servicios</Link></li>
                        <li className="nav-item dropdown">
                                  <li className="nav-link dropdown-toggle" id="navbarDropdownBlog" role="button" data-bs-toggle="dropdown" aria-expanded="false">Agenda Tu Cita</li>
                                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                      <li><Link to="/" className="dropdown-item" >Corte de cabello</Link></li>
                                      <li><Link to="/" className="dropdown-item" >Diseño de barba</Link></li>
                                      <li><Link to="/" className="dropdown-item" >Coloración de cabello o barba</Link></li>
                                      <li><Link to="/" className="dropdown-item" >Manicure y pedicure</Link></li>
                                      <li><Link to="/" className="dropdown-item" >Limpieza facial, nariz y oido</Link></li>
                                  </ul>
                              </li>
                        <li className="nav-item"><Link to="/login" className="nav-link" >Inicia Sesión</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/*<!-- Features section-->*/}
        <section className="py-2" id="features">
            <div className="container px-5 my-10">
                <div className="py-2 text-center">
                    <div className="container px-5 my-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-10 col-xl-7">
                                <div className="text-center">
                                    <form className="formulario">
                                        <h1>Registrate</h1>
                                        <div className="contenedor">
                                        <div className="input-contenedor">
                                             <i className="fas fa-user icon"></i>
                                             <input type="text" placeholder="Nombre Completo"/>
                                        </div>
                                        <div className="input-contenedor">
                                            <i className="fas fa-envelope icon"></i>
                                            <input type="text" placeholder="Correo Electronico"/>
                                        </div>
                                        <div className="input-contenedor">
                                            <i className="fas fa-key icon"></i>
                                        <input type="password" placeholder="Contraseña"/>
                                        </div>
                                            <input type="submit" value="Registrate" className="button"/>
                                            <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
                                            <p>¿Ya tienes una cuenta?<Link to="/login" class="link" >Iniciar Sesion</Link></p>
                                        </div>
                                    </form>
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
                <div className="col-auto"><div className="small m-0 text-white">Copyright 2021 &copy; MisionTIC 2022</div></div>
                <div className="col-auto">
                    <a className="link-light small" href="#!"><i className="bi bi-instagram"> @barberking</i></a>
                    <span class="text-white mx-1">&middot;</span>
                    <a className="link-light small" href="#!"><i className="bi bi-facebook"> BarbeKing</i></a>
                    <span class="text-white mx-1">&middot;</span>
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
export default Registro;
