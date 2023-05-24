import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../themes";
import { useTheme } from '@mui/material';
import CardItem from './CardItem';

function AccountItem({ account }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {
        accountNumber,
        accountType,
        id,
        creditScore,
        cards
    } = account
    return (
      <div className='m-4'>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className='flex flex-col'>
                <Typography color={colors.greenAccent[500]} variant="h3">
                  {accountType}
                </Typography>
                <Typography color={colors.grey[500]} variant="h3">
                  {accountNumber}
                </Typography>
                <Typography color={colors.grey[500]} variant="h3">
                  Credit Score: {creditScore}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className='flex flex-col items-center'>
                {cards.map((card)=>{
                  return <CardItem id={card.id} card={card}/>
                })}
              </div>
              
            </AccordionDetails>
          </Accordion>
      </div>
)
}

export default AccountItem
