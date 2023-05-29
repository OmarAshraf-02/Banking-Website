import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const IdentificationStep = ({ onNext, onBack }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleNext = () => {
        onNext({ identificationFile: selectedFile });
    };

    return (
        <div>
            <form>
                <Typography variant="h6" color='white'>Upload Personal Identification</Typography>
                <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
                <Button onClick={onBack}></Button>
                <Button disabled={!selectedFile} onClick={handleNext} type='submit'>

                </Button>
            </form>
        </div>
    );
};

export default IdentificationStep;
