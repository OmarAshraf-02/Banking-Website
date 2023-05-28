import React from 'react'
import { useMode } from '../themes';
import {Navbar} from './widgets/layout';
import routes from "./routes";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, SignIn } from './pages';
import NewSignUp from '../client/pages/NewSignUp';
import ClientApp from '../client/ClientApp';
import BankerApp from '../banker/BankerApp';
import AdminApp from '../admin/AdminApp';
function SharedApp() {
  return (
  <div>
      {/* <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
      </div> */}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        {/* <Route path="" element={<Navigate to="/home" replace />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='signUp' element={<NewSignUp/>}/>
        <Route path='client/*' element={<ClientApp/>}/>
        <Route path='banker/*' element={<BankerApp/>}/>
        <Route path='admin/*' element={<AdminApp/>}/>
      </Routes>
  </div>
  )
}

export default SharedApp


