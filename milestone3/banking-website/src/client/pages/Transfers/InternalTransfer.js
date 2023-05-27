import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from '../../components/Header.jsx';

const InternalTransfer = () => {
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
            <Header title='Internal Transfer' subtitle='' />
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
                            
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Sender Full Name</InputLabel>
                                <OutlinedInput
                                   
                                    label="Sender Full Name"
                                    value={values.loanAmount}
                                />
                            </FormControl>
                           
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Sender Account Number</InputLabel>
                                <OutlinedInput
                                   
                                    label="Sender Account Number"
                                    value={values.loanAmount}
                                />
                                
                            </FormControl> 
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Recipient Full Name</InputLabel>
                                <OutlinedInput
                                   
                                    label="Recipient Full Name"
                                    value={values.loanAmount}
                                />
                                
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Recipient Account Number</InputLabel>
                                <OutlinedInput
                                   
                                    label="Recipient Account Number"
                                    value={values.loanAmount}
                                />
                                
                            </FormControl>
                                
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Transfer Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    sx={{ height: '52.7167px' }}
                                    startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                                    label="Transfer Amount"
                                    value={values.loanAmount}
                                />
                            </FormControl>
                          



                        


                            <TextField
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Purpose"
                                InputProps={styles}
                                placeholder="Write your purpose for the transfer here in as many lines as you need"
                                multiline
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {loading ? <div></div> : <Button type="submit" color="secondary" variant="contained">
                                Confirm
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

export default InternalTransfer