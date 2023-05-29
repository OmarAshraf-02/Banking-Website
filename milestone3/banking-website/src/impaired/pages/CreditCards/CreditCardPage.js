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
import { useSpeechSynthesis } from 'react-speech-kit';
import BackButtonImp from '../BackButtonImp';


function CreditCardPage() {
  const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
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
            <BackButtonImp to="/creditCards"/>
            <Header title={cardNumber}/>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' >
        <Box>
           <Cards number={cardNumber} expiry={validThru} cvc={cvc} name={cardName} focused="" />
        </Box>
            <Box className='flex flex-col ml-4'>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <TextField
        label="Name on card"
        value={cardName}
        onMouseLeave={() => cancel()} 
        onMouseEnter={() => {speakText('The name on card is ' + cardName)}}
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
        onMouseLeave={() => cancel()} 
        onMouseEnter={() => {speakText('The Credit Score of this card is ' + creditScore)}}
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
        onMouseLeave={() => cancel()} 
        onMouseEnter={() => {speakText('This Credit Card limit is  ' + limit)}}
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
        onMouseLeave={() => cancel()} 
        onMouseEnter={() => {speakText('This Credit Card points is ' + points)}}
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
      onMouseLeave={() => cancel()} 
      onMouseEnter={() => {speakText('The card is valid until  ' + validThru)}}
      InputProps={{
        readOnly: true,
      }}
      multiline
      variant="filled"
      sx={{ mr: 2, mb: 2 }}
    />
    <TextField
        label="cvc"
        value={123}
        onMouseLeave={() => cancel()} 
        onMouseEnter={() => {speakText('The cvc of this card is 123')}}
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
        <Box className='flex flex-end m-4' display='flex' justifyContent='center' alignItems='center'>
           {status === 'Active' ? (
            <Box display='flex'>
                <Link to="theftLossDamageForm">
                    <Button
                    onMouseLeave={() => cancel()} 
                    onMouseEnter={() => {speakText('Report theft , loss or damage please press enter to report')}}
                     variant='contained' 
                     color="secondary" sx={{ mr:2 ,fontSize: 12, color: colors.grey[250]}} size="medium">Report Theft/Loss/Damage</Button>
                </Link>
                <PayCreditCardBillDialog creditCard={card}/>
                <SetReminderDialog type='credit card bill'/>
            </Box>
            ) : (
              <></>
              )}
          </Box>
          <CreditCardTransactionHistory  transactions={transactions}/>
    </div>
  )
}

export default CreditCardPage
