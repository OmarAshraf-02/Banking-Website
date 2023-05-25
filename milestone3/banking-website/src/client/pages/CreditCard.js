import React from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
function CreditCard() {
  const cardNumber = '1234123412341234';
  const cardName = 'Karim Mohamed Gamaleldin';
  const validThru = '12/25';
  const cvc = '123';
  return (
    <div>
      <Cards number={cardNumber}  expiry = {validThru} cvc={cvc} name = {cardName} focused="" />
    </div>
  )
}

export default CreditCard
