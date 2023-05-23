import React from 'react'
import { ColorModeContext , useMode } from './themes';
import { Routes , Route } from 'react-router-dom';
import { CssBaseline , ThemeProvider } from '@mui/material'

import LoginForm from './components/LoginForm'


function App() {
  const [theme, colorMode] = useMode();

  return (
    <LoginForm />
  )
}

export default App


