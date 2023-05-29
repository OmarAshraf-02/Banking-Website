import React, { useState } from 'react';
import './LoanCards.css';
import "tachyons"
import { Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../../themes';

const TransferCards = ({ transfer, type }) => {
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
            <Typography sx={{ fontSize: 23 }} color="text.secondary" gutterBottom>{type} Transfer Information</Typography>
            <div>
                <p>Sender Account Number: {transfer.senderAccountNumber}</p>
                <p>Receiver Account Number: {transfer.recipientAccountNumber}</p>
                <p>Transfer Amount: {transfer.amount} {type==='International'? transfer.currency:'EGP'}</p>
                <p>Date sent: {transfer.dateSent}</p>
                {moreInfo?
                    <div>
                        <p>Recipient Bank Name: {transfer.recipientBankName}</p>
                        {type==='International'? 
                            <div>
                                <p>Recipient City: {transfer.recipientCity}</p>
                                <p>Recipient Swift BIC: {transfer.recipientSwiftBIC}</p>
                            </div>
                        :
                            <></>
                        }
                    </div>
                    :
                    <></>  
                }
            </div>
            <div class="" style={{display: "flex", justifyContent: "flex-end"}}>
                {type==='Internal'?
                    <></>
                :
                    moreInfo?
                        <Button onClick={handleMoreInfoOnChange} variant='contained' color="secondary" sx={{ fontSize: 12, color: colors.grey[250]}} size="medium">hide additional information</Button>
                        :
                        <Button onClick={handleMoreInfoOnChange} variant='contained' color="secondary" sx={{ fontSize: 12, color: colors.grey[250]}} size="medium">view additional information</Button>
                }
            </div>
        </div>


    );
};

export default TransferCards;
