import React from 'react'
import { useMode } from './themes';
import {Navbar} from './shared/widgets/layout';
import routes from "./shared/routes";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, SignIn } from './shared/pages';
import NewSignUp from './client/pages/NewSignUp';
import ClientApp from './client/ClientApp';
import BankerApp from './banker/BankerApp';
import AdminApp from './admin/AdminApp';
function App() {

  return (
  <div>
      <Routes>
      <Route path='signUp' element={<NewSignUp/>}/>
        <Route path='client/*' element={<ClientApp/>}/>
        <Route path='banker/*' element={<BankerApp/>}/>
        <Route path='admin/*' element={<AdminApp/>}/>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="" element={<Navigate to="/" replace />} />
      </Routes>
  </div>
  )
}

export default App