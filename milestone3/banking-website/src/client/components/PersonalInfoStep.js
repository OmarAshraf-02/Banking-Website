import React, { useState } from 'react';
import { TextField, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { styled, createTheme, ThemeProvider, withStyles } from '@mui/material/styles';

const PersonalInfoStep = ({ onNext, formData }) => {
    const [firstName, setFirstName] = useState(formData.firstName || '');
    const [lastName, setLastName] = useState(formData.lastName || '');
    const [gender, setGender] = useState(formData.gender || '');

    const handleNext = () => {
        onNext({ firstName, lastName, gender });
    };
    const CustomFormControlLabel = styled(FormControlLabel)({
        color: 'white', // Replace 'red' with your desired color
    });



    return (
        <div>
            <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                margin="normal"
                multiline
            />
            <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                margin="normal"
                multiline
            />
            <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
                <CustomFormControlLabel value="male" control={<Radio />} label="Male" />
                <CustomFormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            <button onClick={handleNext}></button>
        </div>
    );
};

export default PersonalInfoStep;
