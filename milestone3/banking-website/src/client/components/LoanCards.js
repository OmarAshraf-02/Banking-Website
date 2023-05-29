import React, { useState } from 'react';
import './LoanCards.css';
import "tachyons"
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../../themes';
import SetReminderDialog from './SetReminderDialog';

const LoanCards = ({ loan }) => {
    const [moreInfo, setMoreInfo] = useState(false);
    const handleMoreInfoOnChange = ()=>{
        setMoreInfo(!moreInfo);
    }
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        // <div className="card">
        //   <h2 className="card-title">{name}</h2>
        //   <p className="card-content">{summary}</p>
        //   {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link> */}
        // </div>
        <div class="loan-card">
            <Typography sx={{ fontSize: 23 }} color="text.secondary" gutterBottom>{loan.loanType} Loan Information</Typography>
            <div>
                <p>Loan amount: ${loan.amount}</p>
                <p>Interest rate: {loan.rate}%</p>
                <p className='mb-3'>Loan duration: {loan.duration} months</p>
                {moreInfo?
                    <div>
                        <p>Loan status: {loan.status}</p>
                        <p>Due Date: {loan.paymentDue}</p>
                        <p>Date applied: {loan.date}</p>
                        {loan.loanType==='Car'? 
                            <div>
                                <p>Car make: {loan.make}</p>
                                <p>Car model: {loan.model}</p>
                                <p>Car year: {loan.year}</p>
                            </div>
                        :
                            <></>
                        }
                    </div>
                    :
                    <></>  
                }
            </div>
            <Box  style={{display: "flex", justifyContent: "space-between"}}>
                {loan.status==='Active'?<SetReminderDialog dueDate={loan.paymentDue} type={`${loan.loanType} loan`}/>:<></>}
                {moreInfo?
                   <Button onClick={handleMoreInfoOnChange} variant='contained' color="secondary" sx={{ fontSize: 12, color: colors.grey[250]}} size="medium">hide additional information</Button>
                    :
                    <Button onClick={handleMoreInfoOnChange} variant='contained' color="secondary" sx={{ fontSize: 12, color: colors.grey[250]}} size="medium">view additional information</Button>
                    }
            </Box>
        </div>


    );
};

export default LoanCards;
