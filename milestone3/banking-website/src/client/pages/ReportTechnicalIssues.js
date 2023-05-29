import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment, CircularProgress } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from '../components/Header.jsx';
import CheckIcon from '@mui/icons-material/Check';

const ReportTechnicalIssue = () => {
    const [loading, setLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
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
            <Header title='Report Technical Issues' subtitle='' />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={reportSchema}
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
                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Report"
                                InputProps={styles}
                                placeholder="Write your report for technical issues here in as many lines as you need"
                                multiline
                                value={values.report}
                                name='report'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.report && !!errors.report}
                                helperText={touched.report && errors.report}
                            />
                        </Box>
                        {/* <Box display="flex" justifyContent="end" mt="20px">
                            {loading ? <div></div> : <Button type="submit" color="secondary" variant="contained">
                                Report
                            </Button>}
                        </Box> */}
                        <Box display="flex" justifyContent="end" mt="20px">
                            {isSubmitting ? (
                                <CircularProgress color="secondary" size={24} />
                            ) : (
                                <>
                                    {isConfirmed && <CheckIcon style={{ marginRight: '10px', color: 'green' }} />}
                                    <Button type="submit" color="secondary" variant="contained" disabled={isSubmitting}>
                                        REPORT
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



const reportSchema = yup.object().shape({
    report: yup.string().required("required"),
});

export default ReportTechnicalIssue
