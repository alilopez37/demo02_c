import {useState} from 'react'
import '../assets/styles/Form.css';


function Form() {
    const [count, setCount] = useState(0);

    const handleFocus = () => {
        console.log('Evento focus')
    }

    const handleBlur = (event) => {
        console.log(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
    }
    return (
        <div className="container">
            <div className="container_login">
                <form onSubmit={handleSubmit}>
                    <div className='box'>
                        <label htmlFor="username">Nombre de usuario</label>
                        <input className="input_style" type="text" id="username" onFocus={handleFocus} onBlur={handleBlur} value={count}/>
                    </div>
                    <div className='box'>
                        <label htmlFor="password">Contraseña</label>
                        <input className="input_style" type="password" id="password"  />
                    </div>

                    <div className="box">
                        <button className="boton" onClick={()=> setCount(count+1)}>Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
      );
}

export default Form;