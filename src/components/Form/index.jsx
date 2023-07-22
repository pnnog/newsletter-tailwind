import formLogo from './form-logo.png'

import { useState } from "react"
import TextField from "./TextField"

const Form = ({setUserData}) => {

  const [user,setUser] = useState('')
  const [email, setEmail]= useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    setUserData({
      user,
      email
    })

  }

  return (
    <section className="form-wrapper">
      <img src={formLogo} alt="Logo dos assassinos" className='w-24 h-24 mx-auto rounded-full ' />

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
        <TextField label='Usuário' type='text' getValue={(value)=> setUser(value)} value={user} />
        <TextField label='Email' type='email' getValue={(value)=> setEmail(value)} value={email}/>

        <button className="custom-button"> Seguir </button>
      </form>
    </section>

  )
}

export default Form