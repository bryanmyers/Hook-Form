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

      {/* Display component is read only so no need for setUser */}
      <Display user={user} />
    </main>
  );
}

export default App;
