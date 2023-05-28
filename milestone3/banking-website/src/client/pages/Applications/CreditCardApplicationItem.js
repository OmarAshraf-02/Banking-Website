
import React from 'react'

function CreditCardApplicationItem({creditcard}) {
    return (
        <div >
            {/* <h1>
            gjhgjjhghjgjhggjgjgjhgj
            </h1> */}
                     {creditcard.nationalIdNumber}
                
                    {creditcard.cardholderName}
               
                    {creditcard.city}
                
                    {creditcard.address}
               
                    {creditcard.creditLimit}
               
                    {creditcard.annualIncome}
               
                    {creditcard.occupation}
              
                    {creditcard.employer}
                
                    {creditcard.homeownerStatus}
                
                    {creditcard.maritalStatus} 
                
              
        </div>
        
    )
}

export default CreditCardApplicationItem