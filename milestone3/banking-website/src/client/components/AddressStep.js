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
            <form>
                <TextField
                    label="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                    margin="normal"
                    multiline
                    required
                />
                <TextField
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    fullWidth
                    margin="normal"
                    multiline
                    required
                />
                <button onClick={onBack}></button>
                <button onClick={handleNext} type="submit"></button>
            </form>
        </div>
    );
};

export default AddressStep;
