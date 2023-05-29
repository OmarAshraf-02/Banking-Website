import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment, Radio, RadioGroup, FormControlLabel, FormLabel, Checkbox, Typography } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from '../components/Header.jsx';
import SignaturePad from '../components/SignaturePad.js';
import BackButton from '../../shared/components/BackButton.js';
import { useParams } from 'react-router';
import SpeechRecognitionTextField from '../components/SpeechRecognitionTextField.js';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useTheme } from '@emotion/react';
import { tokens } from '../../themes.js';

const DebitCardForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [loading, setLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const { id } = useParams();

    const handleFormSubmit = async (values, { resetForm }) => {
        setLoading(true);
        resetForm({ values: '' });
        await setTimeout(() => { setLoading(false) }, 5000)
    };

    const initialValues = {
        nationalId: '',
        address: '',
        city: '',
        cardHolderName: '',

    };
    const styles = {
        textField: {
            height: '300px',
            // Adjust the height as per your requirement
        },
    };
    const textAreaStyle = {
        backgroundColor: '#141b2d',
    }
    const [creditLimit, setCreditLimit] = useState('');

    const handleCreditLimitChange = (event) => {
        setCreditLimit(event.target.value);
    };
    const { speak, cancel } = useSpeechSynthesis();

    const speakText = (text) => {
        speak({ text });
    };

    return (
        <Box m="20px">
            <BackButton to={`/accounts/${id}`} />
            <Header title='Apply for a Debit Card' subtitle='' />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >

                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="National ID Number"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text field to enter your national ID number") }}
                            />
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Cardholder Name"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text field to enter Card Holder Name") }}
                            />
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Address"
                                placeholder="Please give a current address for card delivery purposes"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text field to enter your address") }}
                            />
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="City"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text field to enter the city you live in") }}
                            />

                            <div>
                                <div className='item-center'>
                                    <Typography variant="h6" gutterBottom>
                                        Sign here
                                    </Typography>
                                    <SignaturePad />
                                </div>
                                <FormControlLabel
                                    required
                                    control={<Checkbox color="primary" // Use "primary" or "secondary" color for the tick
                                    sx={{
                                      '&.Mui-checked': {
                                        color: colors.grey[200], // Replace with your desired color
                                      },
                                    }}/>}
                                    label="Accept Terms and Conditions"
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Check this box to accept terms and conditions") }}
                                />
                            </div>


                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {loading ? <div></div> : <Button type="submit" color="secondary" variant="contained" onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button to submit your form") }}>
                                Apply
                            </Button>}
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};



const checkoutSchema = yup.object().shape({
    make: yup.string().required("required"),
    model: yup.string().required("required"),
    loanAmount: yup.number().required('required'),
    year: yup.number().required('required'),
    annualIncome: yup.number().required('required'),
    loanTerm: yup.string().required("required"),
    employmentStatus: yup.string().required("required"),
});

export default DebitCardForm