import React from 'react'
import { useMode } from './themes';
// import LoginForm from './components/LoginForm';
import NewSignUp from './client/pages/SignUp/NewSignUp'
import ClientApp from './client/ClientApp'
import Home from './shared/pages/home';
import { Routes, Route, Navigate } from 'react-router';
import { Navbar } from './shared/widgets/layout';
import routes from './shared/routes'
function App() {
  const [theme, colorMode] = useMode();

  return (
    <div>
      {/* <NewSignUp /> */}
      {/* <ClientApp/> */}
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  )
}

export default App


