import React from 'react'
import { ColorModeContext , useMode } from '../themes';
import { Routes , Route } from 'react-router-dom';
import { CssBaseline , ThemeProvider } from '@mui/material'
import Topbar from './gobal/Topbar';
import Dashboard from './scenes/dashboard';
import Sidebar from './gobal/Sidebar';
import BankAccounts from './scenes/viewbankaccounts';
import CreateAccountForm from './scenes/createaccountform';
import ViewAccountRequests from './scenes/viewaccountrequests';
import ViewLoanRequests from './scenes/viewloanrequests';
import ViewCardRequests from './scenes/viewcardrequests';
import ViewReports from './scenes/viewreports';
import CreateLoanForm from './scenes/createloanform';
import CreateCardForm from './scenes/createcardform';
import NotifyUser from './scenes/notify';
import ViewTransactions from './scenes/viewtransactions';


function BankerApp() {
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
                <Route path = "/createLoan" element={<CreateLoanForm/>} />
                <Route path = "/createCard" element={<CreateCardForm/>} />
                <Route path = "notify" element = {<NotifyUser />} />
                <Route path = "/viewTransactions" element={<ViewTransactions />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default BankerApp;


