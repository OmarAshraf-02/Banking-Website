import React from 'react'
import { ColorModeContext , useMode } from '../themes';
import { Routes , Route } from 'react-router-dom';
import { CssBaseline , ThemeProvider } from '@mui/material'
import Topbar from './gobal/Topbar';
import Dashboard from './scenes/dashboard';
import Sidebar from './gobal/Sidebar';
import ViewAdmins from './scenes/viewadmins';
import ViewBankers from './scenes/viewbankers';
import CreateAdmin from './scenes/createAdminForm'
import CreateBanker from './scenes/createBankerForm';
import ViewReports from './scenes/viewreports';
import NotifyUser from './scenes/notify';


function AdminApp() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline>
          <div className = "app">
            <Sidebar/>
            <main className = "content">
              <Topbar />
              <Routes>
                <Route path ="/" element={<Dashboard />} />
                <Route path = "viewAdmins" element={<ViewAdmins/>} />
                <Route path = "createAdmin" element={<CreateAdmin/>} />
                <Route path = "viewBankers" element={<ViewBankers/>} />
                <Route path = "createBanker" element={<CreateBanker/>} />
                <Route path = "viewReport" element={<ViewReports/>} />
                <Route path = "notify" element={<NotifyUser/>} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AdminApp;


