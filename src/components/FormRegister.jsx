import {useState} from 'react'
import '../assets/styles/FormRegister.css'

function FormRegister() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeLastname = (event) => setLastname(event.target.value)
    const handleChangeUsername = (event) => setUsername(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)

    const handleBlur = (event) => {
        fetch('http://44.201.115.90/user/usernameValidate/'+username)
        .then(response => response.json())
        .then (data => data.status ? alert('Usuario ocupado') : '')
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                name: name,
                lastname: lastname,
                username: username,
                password: password
            })
        }
        fetch('http://44.201.115.90/user', option)
        .then (response => response.json())
        .then ( data => data.status ? alert('Registro exitoso') : alert('Ha ocurrido un error'))
        .catch (err => console.log(err))
    }
    return ( 
    
        <div className="container">
            
            <div className="container_login">

                <form onSubmit={handleSubmit}>
                    <div className='box'>
                        <label htmlFor="name">Nombre:</label>
                        <input className="input_style" type="text" id="name" value={name} onChange={handleChangeName}/>
                    </div>
                    <div className='box'>
                        <label htmlFor="lastname">Apellido paterno:</label>
                        <input className="input_style" type="text" id="lastname" value={lastname} onChange={handleChangeLastname}/>
                    </div>
                    <div className='box'>
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input className="input_style" type="text" id="username" value={username} onChange={handleChangeUsername} onBlur={handleBlur}/>
                    </div>
                    <div className='box'>
                        <label htmlFor="password">Contraseña:</label>
                        <input className="input_style" type="password" id="password" value={password} onChange={handleChangePassword}/>
                    </div>

                    <div className="box">
                        <button className="boton">Registar usuario</button>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default FormRegister;