import React, { useState } from 'react';
import { TextField } from '@mui/material';

const AddressStep = ({ onNext, onBack, formData }) => {
    const [city, setCity] = useState(formData.city || '');
    const [address, setAddress] = useState(formData.address || '');

    const handleNext = () => {
        onNext({ city, address });
    };

    return (
        <div>
            <TextField
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                margin="normal"
            />
            <button onClick={onBack}></button>
            <button onClick={handleNext}></button>
        </div>
    );
};

export default AddressStep;
