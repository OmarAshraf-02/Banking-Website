import React, { useState } from 'react';
import './LoanCards.css';
import "tachyons"

const TransferCards = ({ transfer, type }) => {
    const [moreInfo, setMoreInfo] = useState(false);
    const handleMoreInfoOnChange = ()=>{
        setMoreInfo(!moreInfo);
    }
    return (
        // <div className="card">
        //   <h2 className="card-title">{name}</h2>
        //   <p className="card-content">{summary}</p>
        //   {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link> */}
        // </div>
        <div class="loan-card">
            <div class="loan-card-header">{type} Transfer Information</div>
            <div class="loan-card-body">
                <p>Sender Account Number: ${transfer.senderAccountNumber}</p>
                <p>Receiver Account Number: {transfer.recipientAccountNumber}%</p>
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
            <div class="loan-card-footer" style={{display: "flex", justifyContent: "flex-end"}}>
                {type==='Internal'?
                    <></>
                :
                    moreInfo?
                        <button onClick={handleMoreInfoOnChange}> hide additional information</button>
                        :
                        <button onClick={handleMoreInfoOnChange}> view additional information</button>}
            </div>
        </div>


    );
};

export default TransferCards;
