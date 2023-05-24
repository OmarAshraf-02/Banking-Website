import React from 'react';
import SignUpForm from './pages/SignUp';
import HomePage from './pages/HomePage/HomePage';
import OpenAccount from './pages/OpenAccount';
import { Routes, Route, Link } from 'react-router-dom';
import Bill from './pages/Bill';
import LoginForm from '../components/LoginForm';
import Loan from './pages/Loan/Loan';
import CarLoanForm from './pages/Loan/CarLoanForm'
import { ColorModeContext, useMode } from '../themes';
import { CssBaseline, ThemeProvider } from '@mui/material'
import PersonalLoanForm from './pages/Loan/PersonalLoanForm'
import WithSplashScreen from './components/SplashScreen';
import TransactionHistory from './pages/TransactionHistory';
import ClientSidebar from './components/SideBar';
import TopBar from './components/Topbar'
import ReportTechnicalIssue from './pages/ReportTechnicalIssues';
import Accounts from './pages/Accounts/Accounts';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className='app'>
            <ClientSidebar/>
            {/* <div>
              <nav class="zone blue sticky">
                <ul class="main-nav">
                  <li><Link to="">About</Link></li>
                  <li><Link to="">Products</Link></li>
                  <li><Link to="">Our Team</Link></li>
                  <li class="push"><Link to="">Contact</Link></li>
                </ul>
              </nav>
            </div> */}
            {/* <div class="container"><img class="cover" src="./img/undraw.png" /></div> */}
            {/* <div class="zone blue grid-wrapper"></div> */}
            <main className="content">
              <TopBar/>
              <Routes>
                {/* <Route path='Stepper' element={<Steppers />} /> */}
                <Route path='home' element={<HomePage />} />
                <Route path='login' index element={<LoginForm />} />
                <Route path='openAccount' index element={<OpenAccount />} />
                <Route path='bill' element={<Bill />} />
                <Route path='loan' element={<Loan />} />
                <Route path='loan/carLoanForm' element={<CarLoanForm />} />
                <Route path='loan/PersonalLoanForm' element={<PersonalLoanForm />} />
                <Route path='transactionHistory' element={<TransactionHistory />} />
                <Route path='reportTechnicalIssues' element={<ReportTechnicalIssue />} />
                <Route path='accounts' element={<Accounts />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>


    // <div>
    //   <HomePage />
    //   {/* <OpenAccount/> */}
    //   {/* <Bill/> */}
    // </div>
  )
}

export default WithSplashScreen(App);


