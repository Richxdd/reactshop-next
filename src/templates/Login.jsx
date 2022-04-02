import React, { useRef, useState } from "react"
import "@styles/Login.scss"
import logo from "@logos/logo_yard_sale.svg"
import { useHistory } from "react-router-dom"
import axios from "axios"

const Login = () => {
  let navigate = useHistory()
  const [Incorrecta, setIncorrecta] = useState("")

  const form = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const datos = {
      email: formData.get("email"),
      password: formData.get("password"),
    }

    try {
      const API =
        "https://tranquil-ravine-83407.herokuapp.com/api/v1/auth/login"
      // const respuesta = await fetch(API, {
      //   method: "POST",
      //   body: JSON.stringify(datos),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      // console.log(respuesta)
      // const resultado = await respuesta.json()
      // console.log(resultado)
      // if (respuesta.status === 200) {
      //   navigate.push("/")
      // } else {
      //   setIncorrecta("Contraseña Incorrecta")
      // }

      const res = await axios({
        method: "post",
        url: API,
        data: datos,
      })
      navigate.push("/")
    } catch (error) {
      setIncorrecta("Contraseña Incorrecta")
      console.log(error)
    }
  }

  return (
    <div className='Login'>
      <div className='Login-container'>
        <h1 className='title1'>Incio de Sesión</h1>
        <img src={logo} alt='logo' className='logo' />
        <form className='form' ref={form}>
          <label className='incorrecta'>{Incorrecta}</label>
          <label htmlFor='email' className='label'>
            Dirección de correo electrónico
          </label>
          <input
            type='text'
            name='email'
            placeholder='platzi@example.cm'
            className='input input-email'
          />
          <label htmlFor='password' className='label'>
            Contraseña
          </label>
          <input
            type='password'
            name='password'
            placeholder='*********'
            className='input input-password'
          />
          <a href='/'>
            <button
              onClick={handleSubmit}
              className='primary-button login-button'
            >
              Iniciar sesión
            </button>
          </a>
          <a href='/password-recovery'>Olvidé mi contraseña</a>
        </form>
        <a href='/signup'>
          <button className='secondary-button signup-button'>
            Registrarse
          </button>
        </a>
      </div>
    </div>
  )
}

export default Login
