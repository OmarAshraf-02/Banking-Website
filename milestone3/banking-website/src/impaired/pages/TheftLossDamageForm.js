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
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognitionTextField from '../components/SpeechRecognitionTextField.js';



const TheftLossDamageForm = () => {
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    const [loading, setLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const { id } = useParams();
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
                            <div
                            style={{ gridColumn: "span 4" }}
                            onMouseLeave={() => cancel()} 
                            onMouseEnter={() => {speakText("Drop down menu to specify the incident type")}}
                            >
                            <FormControl fullWidth
                                sx={{ gridColumn: "span 4" }}>
                                <InputLabel  id="employmentSelect">Incident Type</InputLabel>
                                <Field
                                    as={Select}
                                    name="Incident"
                                >
                                    <MenuItem
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText("Press here to choose theft")}}
                                    value={"theft"}>Theft</MenuItem>
                                    <MenuItem
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText("Press here to choose loss")}}
                                    value={"loss"}>Loss</MenuItem>
                                    <MenuItem 
                                    onMouseLeave={() => cancel()} 
                                    onMouseEnter={() => {speakText("Press here to choose damage")}}
                                    value={"damage"}>Damage</MenuItem>
                                </Field>
                            </FormControl>
                            </div>
                            <SpeechRecognitionTextField
                                onMouseLeave={() => cancel()} 
                                onMouseEnter={() => {speakText("Text field to describe or add additional information about the report")}}
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Report"
                                InputProps={styles}
                                placeholder="Write your explanation of the incident in detail, use as many lines as you need"
                                multiline
                            />
                            <div
                            onMouseLeave={() => cancel()} 
                            onMouseEnter={() => {speakText("Date picker to pick the date of your incident")}}
                            >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date of the Incident"
                                    slotProps={{ height: "200px" }}
                                />
                            </LocalizationProvider>
                            </div>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {
                                loading ? <div></div> : <ApplyForReplacementDialog />
                            }
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