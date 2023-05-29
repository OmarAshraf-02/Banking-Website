import { useTheme } from '@emotion/react';
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { tokens } from '../../../themes';
import { useSelector } from 'react-redux';
import BackButton from '../../../shared/components/BackButton';
import Cards from 'react-credit-cards-2';
import CardItem from '../Accounts/CardItem';
import Header from '../../components/Header';
import PayCreditCardBillDialog from '../../components/PayCreditCardBillDialog';
import CreditCardTransactionHistory from './CreditCardTransactionHistory';
import SetReminderDialog from '../../components/SetReminderDialog';

function CreditCardPage() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { id } = useParams();
    const card = useSelector((state)=>{
        return state.clients[0].creditCards.find((card)=>{
            return card.id === Number(id);
        })
    })
    const {
        cardName,
        cardNumber,
        limit,
        validThru,
        cvc,
        points,
        creditScore,
        status,
        balance,
        transactions
    } = card
  return (
    <div className='m-5'>
        <Box display='flex'  alignItems="center">
            <BackButton to="/creditCards"/>
            <Header title={cardNumber}/>
        </Box>
        <Box display='flex' >
        <Box>
           <Cards number={cardNumber} expiry={validThru} cvc={cvc} name={cardName} focused="" />
        </Box>
            <Box className='flex flex-col ml-4'>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <TextField
        label="Name on card"
        value={cardName}
        InputProps={{
          readOnly: true,
        }}
        multiline
        variant="filled"
        sx={{ mr: 2, mb: 2 }}
      />
      <TextField
        label="Credit Score"
        value={creditScore}
        InputProps={{
          readOnly: true,
        }}
        multiline
        variant="filled"
        sx={{ mb: 2 }}
      />
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <TextField
        label="Limit"
        value={limit}
        InputProps={{
          readOnly: true,
        }}
        multiline
        variant="filled"
        sx={{ mr: 2, mb: 2 }}
      />
      <TextField
        label="Points"
        value={points}
        InputProps={{
          readOnly: true,
        }}
        multiline
        variant="filled"
        sx={{ mb: 2 }}
      />
    </Box >
    <Box sx={{ display: 'flex', flexDirection: 'row' }}> 
    <TextField
      label="Valid till"
      value={validThru}
      InputProps={{
        readOnly: true,
      }}
      multiline
      variant="filled"
      sx={{ mr: 2, mb: 2 }}
    />
    <TextField
        label="Current Balance"
        value={balance}
        InputProps={{
          readOnly: true,
        }}
        multiline
        variant="filled"
        sx={{ mb: 2 }}
      />
      </Box>
  </Box>
        </Box>
        <Box className='flex flex-end m-4'>
           {status === 'Active' ? (
            <Box display='flex'>
                <Link to="theftLossDamageForm">
                    <Button variant='contained' color="secondary" sx={{ mr:2 ,fontSize: 12, color: colors.grey[250]}} size="medium">Report Theft/Loss/Damage</Button>
                </Link>
                <PayCreditCardBillDialog creditCard={card}/>
                <SetReminderDialog type='credit card bill'/>
            </Box>
            ) : (
              <></>
              )}
          </Box>
          <CreditCardTransactionHistory transactions={transactions}/>
    </div>
  )
}

export default CreditCardPage
