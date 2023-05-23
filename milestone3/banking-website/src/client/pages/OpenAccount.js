import React, { useState } from 'react';

const OpenAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedAccountType, setSelectedAccountType] = useState('checking');
  const [nationalId, setNationalId] = useState(null);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };

  const handleNationalIdChange = (event) => {
    setNationalId(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the account opening logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Selected Account Type:', selectedAccountType);
    console.log('National ID:', nationalId);

    // Reset form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setSelectedAccountType('checking');
    setNationalId(null);
  };

  return (
    <div>
      <h1>Open a Bank Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </label>
        <br />
        <label>
          Account Type:
          <select value={selectedAccountType} onChange={handleAccountTypeChange}>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
            <option value="credit">Credit</option>
          </select>
        </label>
        <br />
        <label>
          National ID:
          <input type="file" onChange={handleNationalIdChange} accept="image/*" />
        </label>
        <br />
        <button type="submit">Open Account</button>
      </form>
    </div>
  );
};

export default OpenAccount;