import './App.css';

import Form from './components/Form'
import Display from './components/Display'

import {useState} from 'react'

function App() {

  const userTemplate = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }

  const [user, setUser] = useState(userTemplate)

  return (
    <main>
      <Form user={user} setUser={setUser} />
      <Display user={user} setUser={setUser} />
    </main>
  );
}

export default App;
