import React from 'react'
import { Link } from 'react-router-dom'
import carloan from '../../../assets/carloan.svg'
import personalloan from '../../../assets/personalloan.svg'
import './Loan.css'
import Header from '../../components/Header'
import "tachyons";
import LoanCards from '../../components/LoanCards'
import { useDispatch, useSelector } from 'react-redux'
import LoanTypeCard from './LoanTypeCard'
import { Typography } from '@mui/material'

function Loan() {
    const dispatch = useDispatch();
    const {personalLoans, carLoans} = useSelector((state) => {
      return state.clients[0].loans;
    })
    console.log(carLoans)
    return (
        // <div>
        //   <Header className='tc' title='Loans' subtitle=''/>
        //   <div class="fl w-100 w-50-ns pa2 ">
        //     <Link to='CarLoanForm'><div class="box zone "><img src={carloan} />Car Loan</div></Link>
        //     <Link to='PersonalLoanForm'><div class="box zone "><img src={personalloan} />Personal loan</div></Link>
        //   </div>
        // </div>

        <div >
            <Header title='Loans' subtitle='Loan History'/>
            <Header subtitle='Active Loans'/>
            {personalLoans.map((loan)=>{
                return loan.status==='Active'?<LoanCards key={loan.id} loan={loan}/>:<></>
            })}
            {carLoans.map((loan)=>{
                return loan.status==='Active'?<LoanCards key={loan.id} loan={loan}/>:<></>
            })}
            <Header subtitle='Paid Loans'/>
            {personalLoans.map((loan)=>{
                return loan.status==='Paid'?<LoanCards key={loan.id} loan={loan}/>:<></>
            })}
            {carLoans.map((loan)=>{
                return loan.status==='Paid'?<LoanCards key={loan.id} loan={loan}/>:<></>
            })}
            <div className='flex items-center'>
                <LoanTypeCard alt='car loan' img={carloan} to='CarLoanForm' summary='Apply for personal loans and enjoy your miserable life because you will eventually go to prison' title='Car Loans'/>
                <LoanTypeCard alt='personal loan' img={personalloan} to='PersonalLoanForm' summary='Apply for personal loans and enjoy your miserable life because you will eventually go to prison' title='Personal Loans'/>
            </div>
            
            {/* <div class="cf ph2-ns">
                <h3 class="mw5  pa3 ph5-ns">Apply for Loans</h3>
                <div class="fl w-100 w-50-ns pa2">
                    <Link to='CarLoanForm'><div class="box zone pv7  "><img src={carloan} />Car Loan</div></Link>
                </div>
                <div class="fl w-100 w-50-ns pa2">
                    <Link to='PersonalLoanForm'><div class="box zone pa7"><img src={personalloan} />Personal loan</div></Link>
                </div>
            </div> */}
        </div>
    )
}

export default Loan