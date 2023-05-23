import React from 'react'
import { ColorModeContext , useMode } from './themes';
import { Routes , Route } from 'react-router-dom';
import { CssBaseline , ThemeProvider } from '@mui/material'
import Topbar from './banker/gobal/Topbar';
import Dashboard from './banker/scenes/dashboard';
import Sidebar from './banker/gobal/Sidebar';
import BankAccounts from './banker/scenes/viewbankaccounts';
import CreateAccountForm from './banker/scenes/createaccountform';
import ViewAccountRequests from './banker/scenes/viewaccountrequests';
import ViewLoanRequests from './banker/scenes/viewloanrequests';
import ViewCardRequests from './banker/scenes/viewcardrequests';
import ViewReports from './banker/scenes/viewreports';


function App() {
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
                <Route path = "/viewBankAccounts" element={<BankAccounts/>} />
                <Route path = "/createAccount" element={<CreateAccountForm/>} />
                <Route path = "/viewAccountRequests" element={<ViewAccountRequests/>} />
                <Route path = "/loanRequests" element={<ViewLoanRequests/>} />
                <Route path = "/cardRequests" element={<ViewCardRequests/>} />
                <Route path = "/viewReport" element={<ViewReports/>} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App


