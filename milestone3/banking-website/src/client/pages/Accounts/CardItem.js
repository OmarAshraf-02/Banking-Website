import React from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Typography from "@mui/material/Typography";
import { tokens } from "../../../themes";
import { useTheme } from '@mui/material';
// import './Homepage.css';
import { useSelector } from 'react-redux';
function CardItem({card}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const name = useSelector((state) => {
        return state.clients[0].name
    })
    const {
        cardNumber,
        validThru,
        id,
        cvc,
        type
    } = card
  return (
    <div className='grow m-7 flex flex-row justify-between grid gap-10 hover:gap-12'>
        <Cards number={cardNumber}  expiry={validThru} cvc={cvc} name ={name} focused="" />
        <div className='flex flex-col'>
            <Typography color={colors.grey[500]} variant="h3">
                Type: {type}
            </Typography> 
            {type==='Credit Card'?
                <Typography color={colors.grey[500]} variant="h3">
                    Limit: {card.limit}
                </Typography> 
                :
                <Typography color={colors.grey[500]} variant="h3">
                    Balance: {card.balance}
                </Typography>    
            }
            
        </div>
        
    </div>
  )
}

export default CardItem
