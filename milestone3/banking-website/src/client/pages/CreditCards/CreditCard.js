import { Button } from '@mui/material';
import React from 'react'
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CreditCardItem from './CreditCardItem';
import { useTheme } from '@emotion/react';
import { tokens } from '../../../themes';
import Header from '../../components/Header';
function CreditCard() {
  // const cardNumber = '1234123412341234';
  // const cardName = 'Karim Mohamed Gamaleldin';
  // const validThru = '12/25';
  // const cvc = '123';
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const creditCards = useSelector((state)=>{
    return state.clients[0].creditCards;
  })
  return (
    <div>
      <Header title='Credit Cards' subtitle=''/>

      {/* <Cards number={cardNumber} expiry={validThru} cvc={cvc} name={cardName} focused="" /> */}
      {creditCards.map((card)=>{
        return <CreditCardItem card={card}/>
      })}
      <div className='flex flex-col items-center m-3'>
      <Link to="creditCardForm">
          <Button variant='contained' color="secondary" sx={{ fontSize: 12, color: colors.grey[250]}} size="medium">Apply for credit card</Button>
      </Link>
      </div>
      {/* <Link to="theftLossDamageForm"><Button variant='contained'>Report Theft/Loss/Damage</Button></Link> */}
    </div>
  )
}

export default CreditCard
