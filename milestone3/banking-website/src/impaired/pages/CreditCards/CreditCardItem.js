import { useTheme } from '@emotion/react';
import { Button, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { tokens } from '../../../themes';
import '../../components/LoanCards.css';
import { useSpeechSynthesis } from 'react-speech-kit';


function CreditCardItem({ card }) {
  const { speak , cancel } = useSpeechSynthesis();
  const speakText = (text) => {
    speak({ text });
  };
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {
        id,
        cardName,
        cardNumber,
        limit,
        validThru,
        cvc,
        points,
        creditScore,
        status
    } = card
  return (
    <div
    onMouseLeave={() => cancel()} 
    onMouseEnter={() => {speakText(cardName + ' expires on ' + validThru )}} 
    class="loan-card">
          <Typography sx={{ fontSize: 23 }} color={status==='Active'?colors.greenAccent[500]: colors.redAccent[500]} gutterBottom>{cardNumber} - {status}</Typography>
          <div>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Expires on: {validThru}
            </Typography>
          </div>
          <div class="" style={{display: "flex", justifyContent: "flex-end"}}>
            <Link to={""+id}>
              <Button
                onMouseLeave={() => cancel()} 
                onMouseEnter={() => {speakText('Learn more button , Press to learn more information about this credit card' )}}
               variant='contained' color="secondary" sx={{ fontSize: 12, color: colors.grey[250]}} size="medium">Learn More</Button>
            </Link>      
          </div>  
      </div>
    // <div>
    //   <Cards number={cardNumber} expiry={validThru} cvc={cvc} name={cardName} focused="" />
    // </div>
  )
}

export default CreditCardItem
