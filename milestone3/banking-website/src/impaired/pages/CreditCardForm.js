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
import { useSpeechSynthesis } from 'react-speech-kit';



const CreditCardForm = () => {
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    const [loading, setLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = async (values, { resetForm }) => {
        setLoading(true);
        resetForm({ values: '' });
        await setTimeout(() => { setLoading(false) }, 5000)
    };

    const initialValues = {
        limit: '',
        nationalId: '',
        annualIncome: '',
        employer: '',
        livingStatus: '',
        address: '',
        city: '',
        occupation: '',
        maritalStatus: '',
        haveCreditCards: '',
        currentCreditCards: '',

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

    return (
        <Box m="20px">
            <Box display='flex'  alignItems="center">
                <BackButton to="/creditCards" />
                <Header title='Apply for a Credit Card' subtitle='' />
            </Box>
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
                            <FormControl fullWidth sx={{ gridColumn: 'span 4' }}>
                                <InputLabel htmlFor="outlined-adornment-amount" shrink>
                                    Credit Limit
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Credit Limit"
                                    value={creditLimit}
                                    onChange={handleCreditLimitChange}
                                    inputProps={{
                                        'aria-label': 'credit-limit',
                                    }}
                                    required
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Text Field to enter the credit card limit' )}}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: 'span 4' }}>
                                <InputLabel htmlFor="outlined-adornment-amount" shrink>
                                    Annual Income
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-annualincome"
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Annual Income"
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Text Field to enter your Annual Income' )}}

                                    inputProps={{
                                        'aria-label': 'annualIncome',
                                    }}
                                    required
                                />
                            </FormControl>
                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="National ID Number"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} 
                                onMouseEnter={() => {speakText('Text Field to enter your National ID number' )}}
                            />
                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Occupation"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} 
                                onMouseEnter={() => {speakText('Text Field to enter your occupation' )}}
                            />
                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Employer"
                                InputProps={styles}
                                placeholder="If not applicable, clarify here if currently Self-Employed or Unemployed"
                                multiline
                                required
                                onMouseLeave={() => cancel()} 
                                onMouseEnter={() => {speakText('Text Field to enter your employer' )}}
                            />
                            <FormControl>
                                <FormLabel id="livingStatus">Are you a</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel 
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Press if you are a homeowner' )}}
                                     value="homeOwner" control={<Radio />} label="Homeowner" />
                                    <FormControlLabel
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Press if you are a renter' )}}
                                     value="renter" control={<Radio />} label="Renter" />
                                    <FormControlLabel
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('press if your living status isnot specified')}}
                                    value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="maritalStatus">Marital Status</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Press if your are single')}}
                                    value="single" control={<Radio />} label="Single" />
                                    <FormControlLabel
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Press if you are married' )}}
                                    value="married" control={<Radio />} label="Married" />
                                    <FormControlLabel
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Press if you are divorced' )}}
                                     value="divorced" control={<Radio />} label="Divorced" />
                                    <FormControlLabel
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Press if you are a widow or a widower' )}}
                                    value="widow" control={<Radio />} label="Widow(er)" />

                                </RadioGroup>
                            </FormControl>
                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                onMouseLeave={() => cancel()} 
                                onMouseEnter={() => {speakText('Text Field to enter your address' )}}
                                label="Address"
                                placeholder="Please give a current address for card delivery purposes"
                                InputProps={styles}
                                multiline
                                required
                            />
                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                onMouseLeave={() => cancel()} 
                                onMouseEnter={() => {speakText('Text Field to enter the city you live in' )}}
                                label="City"
                                InputProps={styles}
                                multiline
                                required
                            />
                            <FormControl>
                                <FormLabel id="previousCards">Do you have any other credit cards? (If yes fill in the following field)</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel 
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Press if you have other credit cards' )}}
                                    value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel 
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Press if you donot have any other credit cards' )}}
                                    value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                onMouseLeave={() => cancel()} 
                                onMouseEnter={() => {speakText('Text field to enter your other credit  cards' )}}
                                label="Other Credit Cards"
                                placeholder='Please list all your current credit cards and their issuing bank in as many lines as you need'
                                InputProps={styles}
                                multiline
                            />
                            <div>
                                <div>
                                    <Typography variant="h6" gutterBottom>
                                        Sign here
                                    </Typography>
                                    <SignaturePad />
                                </div>
                                <FormControlLabel
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText('Please check to Accept terms and conditions' )}}
                                    required
                                    control={<Checkbox />}
                                    label="Accept Terms and Conditions"
                                />
                            </div>


                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {loading ? <div></div> : <Button 
                            onMouseLeave={() => cancel()} 
                            onMouseEnter={() => {speakText('Apply button please press to apply for your credit card' )}}
                            type="submit" color="secondary" variant="contained">
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

export default CreditCardForm
