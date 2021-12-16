import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const user = useSelector((state) => state.user);
  const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = './login';
  };
  return (
    <div>
      <main className="flex-shrink-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <img
              src={process.env.PUBLIC_URL + '/img/logo.png'}
              alt=""
              width="90"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/quienessomos" className="nav-link">
                    ¿Quienes somos?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/servicios" className="nav-link">
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/registro" className="nav-link">
                    Registro
                  </Link>
                </li>
                {user ? (
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={logout}>
                      Cerrar Sesión
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" onClick={logout}>
                      Iniciar Sesión
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}
export default Navbar;
