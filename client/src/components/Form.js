import React, { useReducer } from 'react'

import styles from '../static/Form.module.css'

const Form = (props) => {

  //not needed, but makes things easier. otherwise props.blahblah everything
  const {user, setUser} = props
  
  const handleChange= (e) => {

    // key needs to be wrapped in [] marks to evaluate the statement rather than try to name it e.target.name
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <form>
      <label htmlFor='firstName'>First Name</label>
      <input type='text' name='firstName' id='firstName' onBlur={handleChange}></input>
      <label htmlFor='lastName'>Last Name</label>
      <input type='text' name='lastName' id='lastName' onBlur={handleChange}></input>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' id='email' onBlur={handleChange}></input>
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' onBlur={handleChange}></input>
      <label htmlFor='passwordConfirm'>Password Confirm</label>
      <input type='password' name='passwordConfirm' id='passwordConfirm' onBlur={handleChange}></input>
    </form>
  )
}

export default Form