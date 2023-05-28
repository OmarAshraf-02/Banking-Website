import React from 'react';
import './Card.css'

const PersonalLoanCard = () => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url('your-image-url.jpg')` }}
      ></div>
      <h2 className="card-title">Personal Loan</h2>
      <p className="card-description">Apply for a personal loan today!</p>
      <a href="/form" className="card-link">
        Apply Now
      </a>
    </div>
  );
};

export default PersonalLoanCard;
