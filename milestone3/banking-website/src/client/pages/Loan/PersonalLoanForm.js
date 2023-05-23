import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";

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

    return (
        <Box m="20px">

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
                                >
                                    <MenuItem value={12}>12 Months</MenuItem>
                                    <MenuItem value={24}>24 Months</MenuItem>
                                    <MenuItem value={36}>36 Months</MenuItem>
                                    <MenuItem value={48}>48 Months</MenuItem>
                                </Field>
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Loan Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Loan Amount"
                                    value={values.loanAmount}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Annual Income</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Loan Amount"
                                    value={values.annualIncome}
                                />
                            </FormControl>



                            <FormControl fullWidth
                                sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="employmentSelect">Employment Status</InputLabel>
                                <Field
                                    as={Select}
                                    name="Employment"
                                >
                                    <MenuItem value={"employed"}>Employed</MenuItem>
                                    <MenuItem value={"selfEmployed"}>Self Employed</MenuItem>
                                    <MenuItem value={"unemployed"}>Unemployed</MenuItem>
                                </Field>
                            </FormControl>


                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Purpose"
                                InputProps={styles}
                                placeholder="Write your purpose for loan application here in as many lines as you need"
                                multiline
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {loading ? <div></div> : <Button type="submit" color="secondary" variant="contained">
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

export default PersonalLoanForm
