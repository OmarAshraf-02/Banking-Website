import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment, CircularProgress } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from '../../components/Header.jsx';
import BackButton from '../../../shared/components/BackButton.js';
import ResponseDialog from '../../components/ResponseDialog.js';
import { CheckIcon } from '@heroicons/react/24/outline';

const PersonalLoanForm = () => {
    const [loading, setLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    // const handleFormSubmit = async (values, { resetForm }) => {
    //     setLoading(true);
    //     resetForm({ values: '' });
    //     await setTimeout(() => { setLoading(false) }, 5000)
    // };

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleFormSubmit = async (values, { resetForm, setSubmitting }) => {
        setLoading(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        resetForm();
        setLoading(false);

        setIsConfirmed(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsConfirmed(false);

        setSubmitting(false);
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


    return (
        <Box m="20px">
            <Box display='flex'  alignItems="center">
                <BackButton to="/loan" />
                <Header title='Apply for Personal Loan' subtitle='' />
            </Box>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={personalLoanSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting
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

                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="termSelect">Loan Term</InputLabel>
                                <Field
                                    value={values.loanTerm}
                                    as={Select}
                                    name="loanTerm"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={12}>12 Months</MenuItem>
                                    <MenuItem value={24}>24 Months</MenuItem>
                                    <MenuItem value={36}>36 Months</MenuItem>
                                    <MenuItem value={48}>48 Months</MenuItem>
                                </Field>
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    fullWidth
                                    name='loanAmount'
                                    value={values.loanAmount}
                                    multiline
                                    variant='outlined'
                                    error={!!touched.loanAmount && !!errors.loanAmount}
                                    helperText={touched.loanAmount && errors.loanAmount}
                                    id="outlined-adornment-amount"
                                    sx={{ height: '52.7167px' }}
                                    // startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Loan Amount (EGP)"
                                    onChange={(event) => {
                                        const numericValue = event.target.value.replace(/[^0-9]/g, "");
                                        handleChange({
                                            target: {
                                                name: "loanAmount",
                                                value: numericValue,
                                            },
                                        });
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    fullWidth
                                    value={values.annualIncome}
                                    multiline
                                    variant='outlined'
                                    name='annualIncome'
                                    error={!!touched.annualIncome && !!errors.annualIncome}
                                    helperText={touched.annualIncome && errors.annualIncome}
                                    id="outlined-adornment-amount"
                                    sx={{ height: '52.7167px' }}
                                    // startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Annual Income (EGP)"
                                    onChange={(event) => {
                                        const numericValue = event.target.value.replace(/[^0-9]/g, "");
                                        handleChange({
                                            target: {
                                                name: "annualIncome",
                                                value: numericValue,
                                            },
                                        });
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth
                                sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="employmentSelect">Employment Status</InputLabel>
                                <Field
                                    value={values.employmentStatus}
                                    as={Select}
                                    name="employmentStatus"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"employed"}>Employed</MenuItem>
                                    <MenuItem value={"selfEmployed"}>Self Employed</MenuItem>
                                    <MenuItem value={"unemployed"}>Unemployed</MenuItem>
                                </Field>
                            </FormControl>

                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    sx={{ gridColumn: "span 4" }}
                                    variant="outlined"
                                    type='text'
                                    value={values.purpose}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Purpose"
                                    InputProps={styles}
                                    placeholder="Write your purpose for loan application here in as many lines as you need"
                                    multiline
                                    name='purpose'
                                    error={!!touched.purpose && !!errors.purpose}
                                    helperText={touched.purpose && errors.purpose}
                                />
                            </FormControl>
                        </Box>
                        {/* <Box display="flex" justifyContent="end" mt="20px">
                            {loading ? <div></div> : <Button type="submit" color="secondary" variant="contained">
                                Apply
                            </Button>}
                            <ResponseDialog response='failed' submit='APPLY'/>

                        </Box> */}
                        <Box display="flex" justifyContent="end" mt="20px">
                            {isSubmitting ? (
                                <CircularProgress color="secondary" size={24} />
                            ) : (
                                <>
                                    {isConfirmed && <CheckIcon style={{ marginRight: '10px', color: 'green' }} />}
                                    <Button type="submit" color="secondary" variant="contained" disabled={isSubmitting}>
                                        Confirm
                                    </Button> 
                                    {/* {
                                        (values.make==='' || values.model==='' || values.year===null||values.loanAmount===''||values.loanTerm===''||values.annualIncome===''||values.employmentStatus==='')?
                                            <Button type="submit" color="secondary" variant="contained" disabled={isSubmitting}>
                                                Confirm
                                            </Button> 
                                            :
                                            <ResponseDialog response='success' submit='CONFIRM'/>
                                        
                                    } */}
                                </>
                            )}
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};



const personalLoanSchema = yup.object().shape({
    loanTerm: yup.string().required("required"),
    loanAmount: yup.number().required('required'),
    purpose: yup.string().required('required'),
    annualIncome: yup.number().required('required'),
    employmentStatus: yup.string().required("required"),
});
// loanAmount: '',
//         loanTerm: '',
//         annualIncome: '',
//         employmentStatus: '',
//         purpose: ''

export default PersonalLoanForm
