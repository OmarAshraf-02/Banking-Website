import React from 'react'
import { useMode } from './themes';
import { Navbar } from './shared/widgets/layout';
import routes from "./shared/routes";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './shared/pages/home';
import SignIn from './shared/pages/sign-in'
import NewSignUp from './client/pages/NewSignUp'
import ClientApp from './client/ClientApp';
import BankerApp from './banker/BankerApp'
import Loan from './client/pages/Loan/Loan';
import Transfer from './client/pages/Transfers/Transfer';
import DomesticStepper from './client/pages/Transfers/DomesticStepper';
import PersonalLoanForm from './client/pages/Loan/PersonalLoanForm';
import DomesticTransfer from './client/pages/Transfers/DomesticTransfer';
import InternationalTransfer from './client/pages/Transfers/InternationalTransfer'
import BackButton from './shared/components/BackButton';
import AdminApp from './admin/AdminApp';
import SharedApp from './shared/SharedApp';
import Card from './client/pages/Loan/Card';
function App() {

  return (
    <div>
      <Card/>
    </div>
  )
}

export default App


