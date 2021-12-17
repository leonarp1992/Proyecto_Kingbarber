import React, {useState} from 'react';
import { apiCreateServices } from '../utils/api';
import request from '../utils/request';

function CreateService() {


    const [service, setService] = useState({
        name: '',
        descripcion:'',
        price: '',
        duration: ''
    });

    const handleSave = e =>{
        setService(function(prev){
            return ({...prev, [e.target.name]: e.target.value})
        });
    };

    const CreateServ = async() =>{
        
        if(!service.name || !service.descripcion || !service.price || !service.duration){
            alert("Por favor diligencie todos los campos.")
        }else{
            const response = await request({link: apiCreateServices, 
                body:({
                name:service.name,
                description : service.descripcion,
                price: service.price,
                duration: service.duration
            }), method: 'POST'
            })
            if(response.success){
                localStorage.setItem('token', response.token )
                localStorage.setItem('user', response.user )
                alert('Empleado creado exitosamente')
                window.location.href='./empleadosua'
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
                      <h1>Crear Servicio</h1>
                      <div className="contenedor">
                        <div className="input-contenedor">
                          <input
                            name="name"
                            type="text"
                            placeholder="Nombre del Servicio"
                            onChange={handleSave}
                          />
                        </div>
                        <div className="input-contenedor">
                          <input
                            name="descripcion"
                            type="text"
                            placeholder="Descripción"
                            onChange={handleSave}
                          />
                        </div>
                        <div className="input-contenedor">
                          <input
                            name="price"
                            type="text"
                            placeholder="Precio"
                            onChange={handleSave}
                          />
                        </div>
                        <div className="input-contenedor">
                          <input
                            name="duration"
                            type="text"
                            placeholder="Duración"
                            onChange={handleSave}
                          />
                        </div>
                        <input
                          type="button"
                          value="Crear"
                          className="button"
                          onClick={CreateServ}
                        />
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
export default CreateService;
