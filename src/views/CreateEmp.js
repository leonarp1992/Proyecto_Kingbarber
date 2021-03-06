import React, {useState, useEffect} from 'react';
import { apiServicios, apiCreateBarbers } from '../utils/api';
import request from '../utils/request';

function CreateEmp() {
    
    const [services, setServices] = useState([]);
    const [service, setService] = useState([]);

    const obtenerServicios = async() => {
      const response = await request({
        link: apiServicios,
        method: 'GET',
      });
      if (response.success) {
        setServices(response.services)
      } else {
        alert(`${response.message}`);
      }
    }

    useEffect(function (){
      obtenerServicios();
    }, []);


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

    const CreateEm = async() =>{
        if(!user.email || !user.password || !user.username || !service){
            alert("Por favor diligencie todos los campos.")
        }else{
            const response = await request({link: apiCreateBarbers, 
                body:({
                name:user.username,
                email : user.email,
                password: user.password,
                services: [service] 
            }), method: 'POST'
            })
            if(response.success){
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
                      <h1>Crear Empleados</h1>
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
                            placeholder="Contrase??a"
                            onChange={handleSave}
                          />
                        </div>
                        <br/>
                        <h4>Servicios</h4>
                        <select
                          className="form-select"
                          aria-label="select example"
                          onChange={function(e){
                            setService(e.target.value);
                          }}
                        >
                        <option value={""}>Seleccione el Servicio a realizar</option>
                          {services.map(function(value, index){
                          return(
                            <option key={index} value={value._id}>{value.name}</option>
                          )
                        })}
                        </select>
                        <br/>
                        <input
                          type="button"
                          value="Crear"
                          className="button"
                          onClick={CreateEm}
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
    </div>
  );
}
export default CreateEmp;
