import React from 'react'

import styles from '../static/Display.module.css'

//this component is read only so no need for setUser
const Display = (props) => {

  //not needed, but makes things easier. otherwise props.blahblah everything
  const {user} = props

  return (
    <div className={styles.display}>
      <h2>Input:</h2>
      <p>First Name: <b>{user.firstName}</b></p>
      <p>Last Name: <b>{user.lastName}</b></p>
      <p>Email: <b>{user.email}</b></p>
      <p>Password: <b>{user.password}</b></p>
      <p>Password Confirm: <b>{user.passwordConfirm}</b></p>
    </div>
  )
}

export default Display