import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from '../components/Header.jsx';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const TheftLossDamageForm = () => {
    const [loading, setLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = async (values, { resetForm }) => {
        setLoading(true);
        resetForm({ values: '' });
        await setTimeout(() => { setLoading(false) }, 5000)
    };

    const initialValues = {
        report: ''
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
            <Header title='Report Card Theft/Loss/Damage' subtitle='' />
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
                                <InputLabel id="employmentSelect">Incident Type</InputLabel>
                                <Field
                                    as={Select}
                                    name="Incident"
                                >
                                    <MenuItem value={"theft"}>Theft</MenuItem>
                                    <MenuItem value={"loss"}>Loss</MenuItem>
                                    <MenuItem value={"damage"}>Damage</MenuItem>
                                </Field>
                            </FormControl>
                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Report"
                                InputProps={styles}
                                placeholder="Write your explanation of the incident in detail, use as many lines as you need"
                                multiline
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date of the Incident"
                                    slotProps={{ height: "200px" }}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {loading ? <div></div> : <Button type="submit" color="secondary" variant="contained">
                                Report
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


export default TheftLossDamageForm