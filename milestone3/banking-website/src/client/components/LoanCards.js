import React from 'react';
import './LoanCards.css';
import "tachyons"

const Cards = ({ name, summary }) => {
    return (
        // <div className="card">
        //   <h2 className="card-title">{name}</h2>
        //   <p className="card-content">{summary}</p>
        //   {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link> */}
        // </div>
        <div class="loan-card">
            <div class="loan-card-header">Loan Information</div>
            <div class="loan-card-body">
                <p>Loan amount: $10,000</p>
                <p>Interest rate: 5%</p>
                <p>Loan duration: 24 months</p>
            </div>
            <div class="loan-card-footer ">
                <button>view additional information</button>
            </div>
        </div>


    );
};

export default Cards;
