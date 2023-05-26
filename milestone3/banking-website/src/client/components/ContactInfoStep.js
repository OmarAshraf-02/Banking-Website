import React, { useState } from 'react';
import { TextField } from '@mui/material';

const ContactInfoStep = ({ onNext, onBack, formData }) => {
    const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '');
    const [email, setEmail] = useState(formData.email || '');
    const [password, setPassword] = useState(formData.password || '');

    const handleNext = () => {
        onNext({ phoneNumber, email, password });
    };

    return (
        <div>
            <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                margin="normal"
                multiline
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                multiline
            />
            <TextField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                type="password"
                multiline
            />
            <button onClick={onBack}></button>
            <button onClick={handleNext}></button>
        </div>
    );
};

export default ContactInfoStep;
