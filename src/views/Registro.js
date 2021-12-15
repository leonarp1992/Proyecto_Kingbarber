import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { apiCreateUsers } from '../utils/api';
import request from '../utils/request';

function Registro() {


    const [user, setUser] = useState({
        username: '',
        email:'',
        password: ''
    });

    const handleSave = e =>{
        setUser(function(prev){
            return ({...prev, [e.target.name]: e.target.value})
        });
    };

    const register = async() =>{
        
        if(!user.email || !user.password || !user.username){
            alert("Por favor diligencie todos los campos.")
        }else{
            const response = await request({link: apiCreateUsers, 
                body:({
                name:user.username,
                email : user.email,
                password: user.password
            }), method: 'POST'
            })
            if(response.success){
                localStorage.setItem('token', response.token )
                localStorage.setItem('user', response.user )
                alert('Usuario creado exitosamente')
                window.location.href='./login'
            }else{
                alert(`${response.message}`)
            }
        }          
    };
  return (
    <div>
      <main className="flex-shrink-0">
        {/*<!-- Features section-->*/}
        <section className="py-2" id="features">
          <div className="container px-5 my-10">
            <div className="py-2 text-center">
              <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                  <div className="col-lg-10 col-xl-7">
                    <div className="text-center">
                      {/* < className="formulario" onSubmit={register}> */}
                      <h1>Registrate</h1>
                      <div className="contenedor">
                        <div className="input-contenedor">
                          <i className="fas fa-user icon"></i>
                          <input
                            name="username"
                            type="text"
                            placeholder="Nombre Completo"
                            onChange={handleSave}
                          />
                        </div>
                        <div className="input-contenedor">
                          <i className="fas fa-envelope icon"></i>
                          <input
                            name="email"
                            type="text"
                            placeholder="Correo Electronico"
                            onChange={handleSave}
                          />
                        </div>
                        <div className="input-contenedor">
                          <i className="fas fa-key icon"></i>
                          <input
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleSave}
                          />
                        </div>
                        <input
                          type="button"
                          value="Registrate"
                          className="button"
                          onClick={register}
                        />
                        <p>
                          Al registrarte, aceptas nuestras Condiciones de uso y
                          Política de privacidad.
                        </p>
                        <p>
                          ¿Ya tienes una cuenta?
                          <Link to="/login" className="link">
                            Iniciar Sesion
                          </Link>
                        </p>
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
export default Registro;
