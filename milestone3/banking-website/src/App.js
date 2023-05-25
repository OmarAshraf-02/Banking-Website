import React from 'react'
import { useMode } from './themes';
import { Navbar } from './shared/widgets/layout';
import routes from "./shared/routes";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './shared/pages/home';
import SignIn from './shared/pages/sign-in'
import NewSignUp from './client/pages/NewSignUp'
function App() {

  return (
    <div>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="" element={<Navigate to="/home" replace />} />
      </Routes>
      {/* <SignIn /> */}
    </div>
  )
}

export default App


