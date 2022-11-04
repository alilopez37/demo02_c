import {Link, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import '../assets/styles/Form.css';


function Form() {
    const navigate = useNavigate();

    //Declaración del hook de Formik
    const formik = useFormik({
        //initialValues objeto que contiene los campos del formulario
        initialValues: {
            username: "",
            password: "",
        },
        // onSubmit método que recibe el handler de submit
        onSubmit: (values) => {
            navigate("/characters");    
        }
    });

    return (
        <div className="container">
            <div className="container_login">
                <form onSubmit={formik.handleSubmit}>
                    <div className='box'>
                        <label htmlFor="username">Nombre de usuario</label>
                        <input className="input_style" 
                            type="text" 
                            id="username" 
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}/>
                    </div>
                    <div className='box'>
                        <label htmlFor="password">Contraseña</label>
                        <input className="input_style" 
                            type="password" 
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}  />
                    </div>

                    <div className="box">
                        <button className="boton">Iniciar sesión</button>
                    </div>

                    <div className="box">
                        <label>¿Aún no tienes cuenta?
                            <Link to="/register">Regístrate</Link>
                        </label>
                    </div>
                </form>
            </div>
        </div>
      );
}

export default Form;