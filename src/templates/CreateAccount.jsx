import React, { useRef, useState } from "react"
import "@styles/CreateAccount.scss"
import { useHistory } from "react-router-dom"

const CreateAccount = () => {
  let navigate = useHistory()

  const [incorrecta, setIncorrecta] = useState("")
  const form = useRef(null)

  const HandleCrear = async (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const datos = {
      email: formData.get("email"),
      password: formData.get("password"),
      role: "customer",
    }
    console.log(datos)
    try {
      const API = "https://tranquil-ravine-83407.herokuapp.com/api/v1/users"
      const respuesta = await fetch(API, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(respuesta)
      const resultado = await respuesta.json()
      console.log(resultado)
      if (respuesta.status === 201) {
        navigate.push("/login")
      } else {
        setIncorrecta(
          "Ya hay un usuario Registrado con el mismo correo por favor intenta con otro correo"
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='CreateAccount'>
      <div className='CreateAccount-container'>
        <h1 className='title1'>Nueva Cuenta</h1>
        <label className='incorrecta'>{incorrecta}</label>
        <form action='/login' className='form ' ref={form}>
          <div>
            <label htmlFor='name' className='label'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Teff'
              className='input input-name'
            />
            <label htmlFor='email' className='label'>
              Correo electrónico
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='platzi@example.com'
              className='input input-email'
            />
            <label htmlFor='password' className='label'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='*********'
              className='input input-password'
            />
          </div>

          <input
            type='submit'
            value='Crear Cuenta'
            className='primary-button login-button'
            onClick={HandleCrear}
          />
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
