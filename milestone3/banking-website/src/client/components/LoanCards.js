import React, { useState } from 'react';
import './LoanCards.css';
import "tachyons"

const LoanCards = ({ loan }) => {
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
            <div class="loan-card-header">Loan Information</div>
            <div class="loan-card-body">
                <p>Loan amount: ${loan.amount}</p>
                <p>Interest rate: {loan.rate}%</p>
                <p>Loan duration: {loan.duration}</p>
                {moreInfo?
                    <div>
                        <p>Loan status: {loan.status}</p>
                        <p>Due Date: {loan.paymentDue}</p>
                        <p>Date applied: {loan.date}</p>
                    </div> :
                    <div></div>  
                }
            </div>
            <div class="loan-card-footer">
                {moreInfo?
                    <button onClick={handleMoreInfoOnChange}> hide additional information</button>
                    :
                    <button onClick={handleMoreInfoOnChange}> view additional information</button>}
            </div>
        </div>


    );
};

export default LoanCards;
