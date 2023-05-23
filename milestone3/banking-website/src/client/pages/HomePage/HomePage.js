import styles from "../../../styles";
import Navbar from '../../components/Navbar';
import Cards from "../../components/LoanCards";
import cardimg from '../../../assets/cardimg.svg'
import loanimg from '../../../assets/loanimg.svg'
import billimg from '../../../assets/billimg.svg'
import transferimg from '../../../assets/transferimg.svg'
import transactionimg from '../../../assets/transactionsimg.svg'
import ClientSidebar from "../../components/SideBar";

import './Homepage.css';
import React from 'react';
import { Link } from "react-router-dom";
const HomePage = () => (
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
    <div className="app">
      <ClientSidebar />
      <div class="zone blue grid-wrapper">
        <Link to='transactionHistory'><div class="box zone"><img src={transactionimg} />Transaction History</div></Link>
        <Link to='card'><div class="box zone"><img src={cardimg} />Cards</div></Link>
        <Link to='loan'><div class="box zone"><img src={loanimg} />Loans</div></Link>
        <Link to='bill'><div class="box zone"><img src={billimg} />Bills</div></Link>
        <Link to='transfer'><div class="box zone"><img src={transferimg} />Transfers</div></Link>
      </div>
    </div>
    <footer class="zone yellow">made by 404</footer>
  </div>

);

export default HomePage;