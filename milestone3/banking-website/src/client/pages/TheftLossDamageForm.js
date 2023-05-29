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
import ApplyForReplacementDialog from '../components/ApplyForReplacementDialog.js';
import BackButton from '../../shared/components/BackButton.js';
import { useParams } from 'react-router';
import CheckIcon from '@mui/icons-material/Check';
import CircularProgress from "@mui/material/CircularProgress";



const TheftLossDamageForm = () => {
    const [loading, setLoading] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const { id } = useParams();
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
            <Box display='flex' alignItems="center">
                <BackButton to={`/creditCards/${id}`} />
                <Header title='Report Card Theft/Loss/Damage' subtitle='' />
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
                            multiline
                            fullWidth
                            variant="filled"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.report}
                            placeholder="Write your explanation of the incident in detail, use as many lines as you need"
                            name="report"
                            error={!!touched.report && !!errors.report}
                            helperText={touched.report && errors.report}
                            sx={{ gridColumn: "span 4" }}
                            label="Report"
                            InputProps={styles}
                            required
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date of the Incident"
                                    slotProps={{ height: "200px" }}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {isSubmitting ? (
                                <CircularProgress color="secondary" size={24} />
                            ) : (
                                <>
                                    {isConfirmed && <CheckIcon style={{ marginRight: '10px', color: 'green' }} />}
                                    <Button type="submit" color="secondary" variant="contained" disabled={isSubmitting}>
                                        Confirm
                                    </Button>
                                    
                                </>
                            )}
             </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};
const checkoutSchema = yup.object().shape({
    incidentType: yup.string(),
    report: yup.string().required("required"),
    dateOfIncident: yup.string(),


});
const initialValues = {
    incidentType: '',
    report: '',
    dateOfIncident: ''
};


export default TheftLossDamageForm