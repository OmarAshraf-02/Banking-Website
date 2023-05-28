import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../themes";
import { Card, useTheme } from '@mui/material';
import CardItem from './CardItem';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../../components/LoanCards.css'
import { GrStatusGood } from 'react-icons/gr';

function AccountItem({ account }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {
        accountNumber,
        accountType,
        id,
        creditScore,
        status
    } = account
    return (
      <div class="loan-card">
          <Typography sx={{ fontSize: 23 }} color={status==='Active'?colors.greenAccent[500]: colors.redAccent[500]} gutterBottom>{accountNumber} - {status}</Typography>
          <div>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              {accountType}
            </Typography>
            <Typography color="text.secondary">
              Credit Score: {creditScore}
            </Typography>
            <Typography color="text.secondary">
              Status: {status}
            </Typography>
          </div>
          <div class="" style={{display: "flex", justifyContent: "flex-end"}}>
            <Link to={""+id}>
              <Button variant='contained' color="secondary" sx={{ fontSize: 12, color: colors.grey[250]}} size="medium">Learn More</Button>
            </Link>      
          </div>  
      </div>
      // <Box sx={{ minWidth: 275, margin: 3 }}>
      //   <Card variant="outlined">
      //     <CardContent>
            // <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            //   {accountType}
            // </Typography>
            // <Typography variant="h5" component="div">
            //   Account Number: {accountNumber}
            // </Typography>
            // <Typography sx={{ mb: 1.5 }} color="text.secondary">
            //   Credit Score: {creditScore}
            // </Typography>
      //     </CardContent>
      //     <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
      //       <Link to={""+id}>
      //         <Button sx={{ fontSize: 12, color: colors.grey[100]}} size="medium">Learn More</Button>
      //       </Link>
      //     </CardActions>
      //   </Card>
      // </Box>
      //  <div className='m-4'>
      //      <Accordion>
      //       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      //         <div className='flex flex-col'>
      //           <Typography color={colors.greenAccent[500]} variant="h3">
      //             {accountType}
      //           </Typography>
      //           <Typography color={colors.grey[500]} variant="h3">
      //             {accountNumber}
      //           </Typography>
      //           <Typography color={colors.grey[500]} variant="h3">
      //             Credit Score: {creditScore}
      //           </Typography>
      //         </div>
      //       </AccordionSummary>
      //       <AccordionDetails>
      //         <div className='flex flex-col items-center'>
      //           {cards.map((card)=>{
      //             return <CardItem id={card.id} card={card}/>
      //           })}
      //         </div>
              
      //       </AccordionDetails>
      //     </Accordion>
      // </div>
    );      
}

export default AccountItem
