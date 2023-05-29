import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from '../../components/Header.jsx';
import BackButton from '../../../shared/components/BackButton.js';
import ResponseDialog from '../../components/ResponseDialog.js';
import { useSpeechSynthesis } from 'react-speech-kit';

const PersonalLoanForm = () => {
    const [loading, setLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = async (values, { resetForm }) => {
        setLoading(true);
        resetForm({ values: '' });
        await setTimeout(() => { setLoading(false) }, 5000)
    };

    const initialValues = {
        loanAmount: '',
        loanTerm: '',
        annualIncome: '',
        employmentStatus: '',
        purpose: ''
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
    const { speak, cancel } = useSpeechSynthesis();

    const speakText = (text) => {
        speak({ text });
    };

    return (
        <Box m="20px">
            <Box display='flex' alignItems="center">
                <BackButton to="/loan" />
                <Header title='Apply for Personal Loan' subtitle='' />
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

                            <FormControl fullWidth
                                sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="termSelect">Loan Term</InputLabel>
                                <Field
                                    as={Select}
                                    name="Loan Term"
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to open a Drop down menu to select the term of your loan") }}
                                >
                                    <MenuItem value={12}
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to select a 12 month loan term") }}>12 Months</MenuItem>
                                    <MenuItem value={24}
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to select a 24 month loan term") }}>24 Months</MenuItem>
                                    <MenuItem value={36}
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to select a 36 month loan term") }}>36 Months</MenuItem>
                                    <MenuItem value={48}
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to select a 48 month loan term") }}>48 Months</MenuItem>
                                </Field>
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Loan Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Loan Amount"
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text field to your desired loan amount") }}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Annual Income</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Annual Income"
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text field to enter your annual income") }}
                                />
                            </FormControl>



                            <FormControl fullWidth
                                sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="employmentSelect">Employment Status</InputLabel>
                                <Field
                                    as={Select}
                                    name="Employment"
                                    onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to open a Drop down menu to select your employment status") }}
                                >
                                    <MenuItem value={"employed"}
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to set your employment status as employed") }}>Employed</MenuItem>
                                    <MenuItem value={"selfEmployed"}
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to set your employment status as self employed") }}>Self Employed</MenuItem>
                                    <MenuItem value={"unemployed"}
                                        onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Click here to set your employment status as unemployed") }}>Unemployed</MenuItem>
                                </Field>
                            </FormControl>


                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Purpose"
                                InputProps={styles}
                                placeholder="Write your purpose for loan application here in as many lines as you need"
                                multiline
                                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Text Field to enter the purpose of your loan application, use as many lines as you need") }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {/* {loading ? <div></div> : <Button type="submit" color="secondary" variant="contained">
                                Apply
                            </Button>} */}
                            <ResponseDialog response='failed' submit='APPLY' />

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

export default PersonalLoanForm
