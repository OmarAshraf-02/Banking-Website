import React from 'react';
import SignUpForm from './client/pages/SignUp';
import HomePage from './client/pages/HomePage/HomePage';
import styles from './styles';
import OpenAccount from './client/pages/OpenAccount';
import { Routes, Route, Link } from 'react-router-dom';
import Bill from './client/pages/Bill';
import LoginForm from './client/pages/LoginForm';
import Loan from './client/pages/Loan/Loan';
import CarLoanForm from './client/pages/Loan/CarLoanForm'
import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material'
import PersonalLoanForm from './client/pages/Loan/PersonalLoanForm'
import WithSplashScreen from './client/components/WithSplashScreen';
import TransactionHistory from './client/pages/TransactionHistory';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div>
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
              <Routes>
                <Route path='/' element={<SignUpForm />} />
                {/* <Route path='Stepper' element={<Steppers />} /> */}
                <Route path='home' element={<HomePage />} />
                <Route path='login' index element={<LoginForm />} />
                <Route path='openAccount' index element={<OpenAccount />} />
                <Route path='home/bill' element={<Bill />} />
                <Route path='home/loan' element={<Loan />} />
                <Route path='home/loan/carLoanForm' element={<CarLoanForm />} />
                <Route path='home/loan/PersonalLoanForm' element={<PersonalLoanForm />} />
                <Route path='home/transactionHistory' element={<TransactionHistory />} />
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


