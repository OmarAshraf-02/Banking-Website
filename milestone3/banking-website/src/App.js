import React from 'react'
import { useMode } from './themes';
import LoginForm from './components/LoginForm';

function App() {
  const [theme, colorMode] = useMode();

  return (
          <LoginForm />
  )
}

export default App


