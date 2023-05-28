import Navbar from '../../components/Navbar';
import cardimg from '../../../assets/cardimg.svg'
import loanimg from '../../../assets/loanimg.svg'
import billimg from '../../../assets/billimg.svg'
import transferimg from '../../../assets/transferimg.svg'
import transactionimg from '../../../assets/transactionsimg.svg'
import ClientSidebar from "../../components/SideBar";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

// import './Homepage.css';
import React from 'react';
import { Link } from "react-router-dom";
import BarGraph from '../../components/BarGraph';
import PieChart from '../../components/PieChart';
const HomePage = () =>{ 
  const cardNumber = '1234123412341234';
  const cardName = 'Karim Mohamed Gamaleldin';
  const validThru = '12/25';
  const cvc = '123';
  const data = [
    { accountNumber: 'ACCT-1', creditScore: 650 },
    { accountNumber: 'ACCT-2', creditScore: 720 },
    { accountNumber: 'ACCT-3', creditScore: 550 },
    { accountNumber: 'ACCT-4', creditScore: 680 },
  ];
  
  return (
  // <div className="bg-primary w-full overflow-hidden">
  //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Navbar />
  //     </div>
  //   </div>

  //   <Cards name="Bills" summary="Manage and pay your bills online."/>
  //   <Cards name="Loans" summary="Apply for loans online."/>
  //   <Cards name="View your account" summary=""/>

  // </div>


  <div>
    {/* <div class="container"><img class="cover" src="./img/undraw.png" /></div> */}
    {/* <div className="app"> */}
      {/* <ClientSidebar /> */}
      <Cards number={cardNumber}  expiry = {validThru} cvc={cvc} name = {cardName} focused="" />
      {/* <BarGraph data={data}/> */}
      {/* <PieChart/> */}
      {/* <div class="zone blue grid-wrapper">
        <Link to='transactionHistory'><div class="box zone"><img src={transactionimg} alt='transaction' />Transaction History</div></Link>
        <Link to='/card'><div class="box zone"><img src={cardimg} alt='card'/>Cards</div></Link>
        <Link to='/loan'><div class="box zone"><img src={loanimg} alt='loan'/>Loans</div></Link>
        <Link to='/bill'><div class="box zone"><img src={billimg} alt='bill'/>Bills</div></Link>
        <Link to='/transfer'><div class="box zone"><img src={transferimg} alt='transfer' />Transfers</div></Link> */}
      {/* </div> */}
    {/* </div> */}
    {/* <footer class="zone yellow">made by 404</footer> */}
  </div>

)}
export default HomePage;