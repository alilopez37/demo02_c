import '../assets/styles/Form.css';

function Form() {
    return (
        <div className="container">
            <div className="container_login">
                <div className='login_username'>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" />
                </div>
                <div className='login_password'>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" />
                </div>
                <div className="login_submit">
                    <button className='login_submit'>Iniciar sesión</button>
                </div>
            </div>
        </div>
      );
}

export default Form;