import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from '../../components/Header.jsx';
import * as yup from "yup";

const CarLoanForm = () => {
    const [loading, setLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = async (values, { resetForm }) => {
        setLoading(true);
        resetForm({ values: '' });
        await setTimeout(() => { setLoading(false) }, 5000)
    };

    const initialValues = {
        make: '',
        model: '',
        year: '',
        loanAmount: '',
        loanTerm: '',
        annualIncome: '',
        employmentStatus: '',
    };

    const styles = {
        textField: {
            height: '52.7167px', // Adjust the height as per your requirement
        },
    };

    return (
        <Box m="20px">
            <Header title='Apply for Car Loan' subtitle='' />
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
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="Make"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                InputProps={{ style: styles.textField }}
                                value={values.make}
                                name="make"
                                error={!!touched.make && !!errors.make}
                                helperText={touched.make && errors.make}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="Model"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                InputProps={{ style: styles.textField }}
                                value={values.model}
                                name="model"
                                error={!!touched.model && !!errors.model}
                                helperText={touched.model && errors.model}
                                sx={{ gridColumn: "span 1" }}
                            />
                            {/* <FormControl fullWidth
                                sx={{ gridColumn: "span 1" }}>
                                <InputLabel id="year">Year of Manufacturing</InputLabel>
                                <Field
                                    as={Select}
                                    name="Year of Manufacturing"
                                >
                                </Field>
                            </FormControl> */}
                            {/* <YearCalendar /> */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Year of Manufacturing"
                                    value={values.year}
                                    views={['year']}

                                />
                            </LocalizationProvider>

                            <FormControl fullWidth
                                sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="employmentSelect">Employment</InputLabel>
                                <Field
                                    as={Select}
                                    name="Employment"
                                >
                                    <MenuItem value={"employed"}>Employed</MenuItem>
                                    <MenuItem value={"selfEmployed"}>Self Employed</MenuItem>
                                    <MenuItem value={"unemployed"}>Unemployed</MenuItem>
                                </Field>
                            </FormControl>

                            <FormControl
                                fullWidth
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
                            {/* <TextField
                                fullWidth
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                type="number"
                                label="Loan Amount"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.loanAmount}
                                name="loanAmount"
                                error={!!touched.loanAmount && !!errors.loanAmount}
                                helperText={touched.loanAmount && errors.loanAmount}
                                sx={{ gridColumn: "span 2" }}
                            /> */}
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Loan Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    InputProps={{ style: styles.textField }}
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Loan Amount"
                                    value={values.loanAmount}
                                />
                            </FormControl>

                            {/* <TextField
                                fullWidth
                                variant="outlined"
                                type="number"
                                label="Annual Income"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                InputProps={{ style: styles.textField }}
                                value={values.annualIncome}
                                name="loanAmount"
                                error={!!touched.annualIncome && !!errors.annualIncome}
                                helperText={touched.annualIncome && errors.annualIncome}
                                sx={{ gridColumn: "span 4" }}
                            /> */}
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Annual Income</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    InputProps={{ style: styles.textField }}
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Loan Amount"
                                    value={values.annualIncome}
                                />
                            </FormControl>

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

export default CarLoanForm