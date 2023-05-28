import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import OpenAccount from './pages/OpenAccount';
import { Routes, Route, Link } from 'react-router-dom';
import Bill from './pages/Bill';
import SignIn from '../shared/pages/sign-in';
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
import CreditCard from './pages/CreditCard';
import AccountPage from './pages/Accounts/AccountPage';
import DebitCardForm from './pages/DebitCardForm';
import PrepaidCardForm from './pages/PrepaidCardForm';
import CreditCardForm from './pages/CreditCardForm';
import Transfer from './pages/Transfers/Transfer';
import DomesticTransfer from './pages/Transfers/DomesticTransfer';
import InternationalTransfer from './pages/Transfers/InternationalTransfer';
import InternalTransfer from './pages/Transfers/InternalTransfer';
import TheftLossDamageForm from './pages/TheftLossDamageForm';
import Notifications from './pages/Notifications/Notifications';
import Applications from './pages/Applications/Applications';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className='app'>
            <ClientSidebar />
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
              <TopBar />
              <Routes>
                {/* <Route path='/sign-in' index element={<SignIn />} /> */}
                {/* <Route path='Stepper' element={<Steppers />} /> */}
                <Route path='/' element={<HomePage />} />
                <Route path='openAccount' index element={<OpenAccount />} />
                <Route path='bill' element={<Bill />} />
                <Route path='loan' element={<Loan />} />
                <Route path='loan/carLoanForm' element={<CarLoanForm />} />
                <Route path='loan/PersonalLoanForm' element={<PersonalLoanForm />} />
                <Route path='transactionHistory' element={<TransactionHistory />} />
                <Route path='reportTechnicalIssues' element={<ReportTechnicalIssue />} />
                <Route path='accounts' element={<Accounts />} />
                <Route path='creditCards' element={<CreditCard />} />
                <Route path="accounts/:id" element={<AccountPage />} />
                <Route path="accounts/:id/debitCardForm" element={<DebitCardForm />} />
                <Route path="accounts/:id/prepaidCardForm" element={<PrepaidCardForm />} />
                <Route path="creditCards/creditCardForm" element={<CreditCardForm />} />
                <Route path='transfer' element={<Transfer />} />
                <Route path='transfer/domestic' element={<DomesticTransfer />} />
                <Route path='transfer/internal' element={<InternalTransfer />} />
                <Route path='transfer/international' element={<InternationalTransfer />} />
                <Route path='creditCards/theftLossDamageForm' element={<TheftLossDamageForm />} />
                <Route path='notifications' element={<Notifications />} />
                <Route path='applications' element={<Applications />} />
                
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

export default WithSplashScreen(ClientApp);


