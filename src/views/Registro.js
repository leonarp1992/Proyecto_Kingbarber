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
    </div>
  );
}
export default Registro;
