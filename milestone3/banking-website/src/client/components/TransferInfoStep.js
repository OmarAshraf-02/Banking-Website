import React, { useState } from 'react';
import { TextField, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { styled, createTheme, ThemeProvider, withStyles } from '@mui/material/styles';

const TransferInfoStep = ({ onNext, formData }) => {
    const [FullName, setFullName] = useState(formData.FullName || '');
    const [BankAccountNumber, setBankAccountNumber] = useState(formData.BankAccountNumber || '');
    const [BankName, setBankName] = useState(formData.BankName || '');
    // const [gender, setGender] = useState(formData.gender || '');

    const handleNext = () => {
        onNext({ FullName, BankAccountNumber, BankName });
    };
    const CustomFormControlLabel = styled(FormControlLabel)({
        color: 'white', // Replace 'red' with your desired color
    });



    return (
        <div>
            <TextField
                label="Full Name"
                value={FullName}
                onChange={(e) => setFullName(e.target.value)}
                fullWidth
                margin="normal"
                multiline
            />
            <TextField
                label="Bank Account Number"
                value={BankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
                fullWidth
                margin="normal"
                multiline
            />
            <TextField
                label="Bank Name"
                value={BankName}
                onChange={(e) => setBankName(e.target.value)}
                fullWidth
                margin="normal"
                multiline
            />

            {/* <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
                <CustomFormControlLabel value="male" control={<Radio />} label="Male" />
                <CustomFormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup> */}
            <button onClick={handleNext}></button>
        </div>
    );
};

export default TransferInfoStep;