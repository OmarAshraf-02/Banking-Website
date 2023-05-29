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
            <form>
                <TextField
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fullWidth
                    margin="normal"
                    multiline
                    required
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    multiline
                    required
                />
                <TextField
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                    type="password"
                    multiline
                    required
                />
                <button onClick={onBack}></button>
                <button onClick={handleNext} type='submit'></button>
            </form>
        </div>
    );
};

export default ContactInfoStep;
