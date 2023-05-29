import React from 'react'
import { Link } from 'react-router-dom'
import carloan from '../../../assets/carloan.svg'
import personalloan from '../../../assets/personalloan.svg'
import '../Loan/Loan.css'
import Header from '../../components/Header'
import "tachyons";
import LoanCards from '../../components/LoanCards'
import { useDispatch, useSelector } from 'react-redux'
import LoanTypeCard from '../Loan/LoanTypeCard'
import { Typography } from '@mui/material'
import TransferCards from '../../components/TransferCards'

function Transfer() {
    const dispatch = useDispatch();
    const { domestic, internal, international } = useSelector((state) => {
        return state.clients[0].transfers
    })
    return (
        // <div>
        //   <Header className='tc' title='Loans' subtitle=''/>
        //   <div class="fl w-100 w-50-ns pa2 ">
        //     <Link to='CarLoanForm'><div class="box zone "><img src={carloan} />Car Loan</div></Link>
        //     <Link to='PersonalLoanForm'><div class="box zone "><img src={personalloan} />Personal loan</div></Link>
        //   </div>
        // </div>

        <div >
            <Header title='Transfers' subtitle='Recent Transfers' />
            {domestic.map((transfer) => {
                return <TransferCards key={transfer.id} transfer={transfer} type='Domestic' />
            })}
            {internal.map((transfer) => {
                return <TransferCards key={transfer.id} transfer={transfer} type='Internal' />
            })}
            {international.map((transfer) => {
                return <TransferCards key={transfer.id} transfer={transfer} type='International' />
            })}
            <div className='flex items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <LoanTypeCard alt='Domestic' img='' to='domestic' summary='' title='Domestic Transfer' />
                <LoanTypeCard alt='Internal' img='' to='internal' summary='' title='Internal Transfer' />
                <LoanTypeCard alt='International' img='' to='international' summary='' title='International Transfer' />
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

export default Transfer