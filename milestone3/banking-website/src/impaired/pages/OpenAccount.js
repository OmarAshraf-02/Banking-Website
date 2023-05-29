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
import SpeechRecognitionTextField from '../components/SpeechRecognitionTextField.js';


const OpenAccountForm = () => {

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
        accountType: ''
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
    // const [creditLimit, setCreditLimit] = useState('');

    // const handleCreditLimitChange = (event) => {
    //     setCreditLimit(event.target.value);
    // };
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    const { speak, cancel } = useSpeechSynthesis();

    const speakText = (text) => {
        speak({ text });
    };

    return (
        <Box m="20px">
            <Box display='flex' alignItems="center">
                <div onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press here to go to the previous page") }}>
                    <BackButton to="/accounts" />
                </div>
                <Header title='Open a new Bank Account' subtitle='' />
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
                            {/* <FormControl fullWidth sx={{ gridColumn: 'span 4' }}>
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
                                />
                            </FormControl> */}
                                <SpeechRecognitionTextField
                                    sx={{ gridColumn: "span 4" }}
                                    variant="outlined"
                                    label="Annual Income"
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    InputProps={styles}
                                    type='number'
                                    multiline
                                    required
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text Field to enter your annual income") }}
                                />
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="National ID Number"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} 
                                onMouseEnter={() => { speakText("Text Field to enter your national ID number") }}
                            />
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Occupation"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text Field to enter your occupation") }}
                            />
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Employer"
                                InputProps={styles}
                                placeholder="If not applicable, clarify here if currently Self-Employed or Unemployed"
                                multiline
                                required
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text Field to enter your employer, if not applicable, clarify if you are Self Employed or Unemployed") }}
                            />
                            <FormControl>
                                <FormLabel id="livingStatus"
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("3 options to specify your living status") }}>Are you a</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"

                                >
                                    <FormControlLabel value="homeOwner" control={<Radio />} label="Homeowner"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you are a home owner") }} />
                                    <FormControlLabel value="renter" control={<Radio />} label="Renter"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you are a renter") }} />
                                    <FormControlLabel value="other" control={<Radio />} label="Other"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you are neither a home owner nor a renter") }} />
                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="maritalStatus" onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("4 options to specify your marital status") }}>Marital Status</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="single" control={<Radio />} label="Single"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you are single") }} />
                                    <FormControlLabel value="married" control={<Radio />} label="Married"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you are married") }} />
                                    <FormControlLabel value="divorced" control={<Radio />} label="Divorced"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you are divorced") }} />
                                    <FormControlLabel value="widow" control={<Radio />} label="Widow(er)"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you are a widow or widower") }} />

                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="accountType" onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("2 options to specify requested account type") }}>Account Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Savings" control={<Radio />} label="Savings"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you want to open a savings account") }} />
                                    <FormControlLabel value="Checkings" control={<Radio />} label="Checkings"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you want to open a checkings account") }} />
                                </RadioGroup>
                            </FormControl>
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Address"
                                placeholder="Please give a current address for card delivery purposes"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text Field to enter your current address, please input a current address for delivery purposes") }}
                            />
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="City"
                                InputProps={styles}
                                multiline
                                required
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text Field to enter your city") }}
                            />
                            <FormControl>
                                <FormLabel id="previousCards"
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("2 options to specify credit card ownership") }}>Do you have a credit card? (If yes fill in the following field)</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you currently have a credit card, fill the following text field") }} />
                                    <FormControlLabel value="no" control={<Radio />} label="No"
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button if you do not currently have a credit card") }} />
                                </RadioGroup>
                            </FormControl>
                            <SpeechRecognitionTextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Current Credit Cards"
                                placeholder='Please list all your current credit cards and their issuing bank in as many lines as you need'
                                InputProps={styles}
                                multiline
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text Field to list your current credit cards, list all your cards and their issuing bank in as many lines as you need") }}
                            />
                            <div>
                                <FormControl fullWidth sx={{ display: 'flex-row', marginBottom: 3 }}>
                                    <Typography sx={{ marginBottom: 1 }} variant="h6" color='white'>Upload Personal Identification</Typography>
                                    <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press this button to browse your computer and upload a personal identification document") }} />
                                </FormControl>
                                <div>
                                    <Typography variant="h6" gutterBottom>
                                        Sign here
                                    </Typography>
                                    <SignaturePad />
                                </div>
                                <FormControlLabel
                                    required
                                    control={<Checkbox />}
                                    label="Accept Terms and Conditions"
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Check this box to accept terms and conditions") }}
                                />
                            </div>


                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {loading ? <div></div> : <Button type="submit" color="secondary" variant="contained" onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press here to submit your form") }}>
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

export default OpenAccountForm
