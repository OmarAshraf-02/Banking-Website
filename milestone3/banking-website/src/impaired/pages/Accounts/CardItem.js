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
    <div className='flex flex-col items-center m-7 grow'>
        <Typography color={colors.grey[200]} variant="h3">
            {type}
        </Typography> 
        <Cards number={cardNumber}  expiry={validThru} cvc={cvc} name ={name} focused="" />
    </div>
  )
}

export default CardItem
