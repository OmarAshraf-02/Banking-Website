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
import { useParams } from 'react-router';
import CheckIcon from '@mui/icons-material/Check';
import CircularProgress from "@mui/material/CircularProgress";




const DebitCardForm = () => {
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
    const [creditLimit, setCreditLimit] = useState('');

    const handleCreditLimitChange = (event) => {
        setCreditLimit(event.target.value);
    };

    return (
        <Box m="20px">
            <BackButton to={`/accounts/${id}`} />
            <Header title='Apply for a Debit Card' subtitle='' />
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

                            <TextField
                            multiline
                            fullWidth
                            variant="filled"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.nationalID}
                            name="nationalID"
                            error={!!touched.nationalID && !!errors.nationalID}
                            helperText={touched.nationalID && errors.nationalID}
                            sx={{ gridColumn: "span 4" }}
                            label="National ID"
                            InputProps={styles}
                            required
                            />
                            <TextField
                                multiline
                                fullWidth
                                variant="filled"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.carholderName}
                                name="carholderName"
                                error={!!touched.carholderName && !!errors.carholderName}
                                helperText={touched.carholderName && errors.carholderName}
                                sx={{ gridColumn: "span 4" }}
                                label="Cardholder name"
                                InputProps={styles}
                                required
                            />
                            <TextField
                            multiline
                            fullWidth
                            variant="filled"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address}
                            name="address"
                            error={!!touched.address && !!errors.address}
                            helperText={touched.address && errors.address}
                            sx={{ gridColumn: "span 4" }}
                            label="Address"
                            InputProps={styles}
                            required
                            />

                            <div>
                                <div className='item-center'>
                                    <Typography variant="h6" gutterBottom>
                                        Sign here
                                    </Typography>
                                    <SignaturePad />
                                </div>
                                <FormControlLabel
                                    required
                                    control={<Checkbox />}
                                    label="Accept Terms and Conditions"
                                />
                            </div>


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
    nationalID: yup.string().required("required"),
    carholderName: yup.string().required("required"),
    address: yup.string().required('required'),
});
const initialValues = {
    nationalID: '',
    carholderName: '',
    address: '',

};

export default DebitCardForm