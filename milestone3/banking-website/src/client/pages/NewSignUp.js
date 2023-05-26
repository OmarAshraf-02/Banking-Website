import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, CircularProgress } from '@mui/material';
import { styled, createTheme, ThemeProvider, withStyles } from '@mui/material/styles';
import PersonalInfoStep from '../components/PersonalInfoStep';
import ContactInfoStep from '../components/ContactInfoStep';
import AddressStep from '../components/AddressStep';
import IdentificationStep from '../components/IdentificationStep';
import logo from '../../assets/logo.png';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgb(34, 197, 94)', // Set the primary color to the desired green color
        },
    },
});


const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default, // Set the background color of the root element
}));

const Logo = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

const LogoImage = styled('img')(({ theme }) => ({
    width: '200px',
    height: 'auto',
}));


const FormWrapper = styled('div')(({ theme }) => ({
    display: 'flex', // Add display flex
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Add justifyContent center
    width: '100%',
    maxWidth: 500,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    backgroundColor: '#333', // Set the background color for the form wrapper
}));

const ButtonWrapper = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const NextButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgb(34, 197, 94)', // Set the background color for the "Next" button
    color: 'white',
    '&:hover': {
        backgroundColor: 'rgb(34, 197, 94)', // Set the hover color for the "Next" button
    },
}));

const BackButton = styled(Button)(({ theme }) => ({
    color: 'rgb(34, 197, 94)', // Set the font color for the "Back" button
    backgroundColor: 'transparent', // Set the background color for the "Back" button to transparent
    '&:hover': {
        backgroundColor: 'transparent', // Set the hover background color for the "Back" button to transparent
    },
}));
const FormContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

const FormActions = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
});

const SubmitButton = styled(Button)({
    backgroundColor: 'rgb(34, 197, 94)',
    color: '#fff',
});

const steps = ['Personal Information', 'Contact Information', 'Address', 'Identification'];

const NewSignUp = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            // Handle final step or form submission
            setLoading(true);
            setTimeout(() => {
                // Simulating asynchronous operation
                console.log(formData);
                setLoading(false);
            }, 2000);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };

    const steps = ['Personal Information', 'Contact Information', 'Address', 'Identification'];

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <PersonalInfoStep formData={formData} handleChange={handleChange} />;
            case 1:
                return <ContactInfoStep formData={formData} handleChange={handleChange} />;
            case 2:
                return <AddressStep formData={formData} handleChange={handleChange} />;
            case 3:
                return <IdentificationStep formData={formData} handleChange={handleChange} />;
            default:
                return null;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Root>

                <FormWrapper>
                    <Logo>
                        <LogoImage src={logo} alt="Logo" />
                    </Logo>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <FormContent>
                        {getStepContent(activeStep)}
                        <FormActions>
                            {activeStep !== 0 && (
                                <BackButton variant="contained" onClick={handleBack}>
                                    Back
                                </BackButton>
                            )}
                            {activeStep !== steps.length - 1 ? (
                                <NextButton variant="contained" onClick={handleNext}>
                                    Next
                                </NextButton>
                            ) : (
                                <SubmitButton variant="contained">Submit</SubmitButton>
                            )}
                        </FormActions>
                    </FormContent>
                </FormWrapper>
            </Root>
        </ThemeProvider>
    );
};
export default NewSignUp;

