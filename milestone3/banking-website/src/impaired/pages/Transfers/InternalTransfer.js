import React from 'react';
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment, CircularProgress } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from '../../components/Header.jsx';
import BackButton from '../../../shared/components/BackButton.js';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import ResponseDialog from '../../components/ResponseDialog.js';
import { useSpeechSynthesis } from 'react-speech-kit';


const InternalTransfer = () => {
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    const [isLoading, setIsLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const accounts = useSelector((state) => {
        return state.clients[0].accounts
    })
    const handleFormSubmit = async (values, { resetForm }) => {
        setIsLoading(true);


        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsConfirmed(true);


        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsConfirmed(false);
        resetForm({ values: '' });
    };

    const initialValues = {
        transferAmount: '',
        senderAccountNumber: '',
        // senderFullName: '',
        receiverAccountNumber: '',
        // receiverFullName: '',
        purpose: '',
    };
    const styles = {
        textField: {
            height: '300px',
        },
    };
    const textAreaStyle = {
        backgroundColor: '#141b2d',
    }

    const checkoutSchema = yup.object().shape({
        // senderFullName: yup.string().required("required"),
        senderAccountNumber: yup.string().required("required"),
        // receiverFullName: yup.string().required("required"),
        receiverAccountNumber: yup.string().required("required"),
        transferAmount: yup
            .number()
            .typeError("Transfer amount must be a valid number")
            .required("Transfer amount is required"),
        purpose: yup.string().required("required"),
    });

    return (
        <Box m="20px">
            <Box display='flex'  alignItems="center">
                <BackButton to="/transfer" />
                <Header title='Internal Transfer' subtitle='' />
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
                            {/* <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    multiline
                                    label="Sender Full Name"
                                    name="senderFullName"
                                    required
                                    value={values.senderFullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.senderFullName && !!errors.senderFullName}
                                    helperText={touched.senderFullName && errors.senderFullName}
                                />
                            </FormControl> */}

                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="sender-account-number-label">Sender Account Number</InputLabel>
                                <Select
                                    onMouseLeave={() => cancel()}
                                    onMouseEnter={() => {speakText('Drop down menu to choose sender account number' )}} 
                                    labelId="sender-account-number-label"
                                    id="sender-account-number"
                                    required
                                    name="senderAccountNumber"
                                    value={values.senderAccountNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.senderAccountNumber && !!errors.senderAccountNumber}
                                    sx={{ height: '52.7167px' }}
                                >
                                    {accounts.map((account) => (
                                        account.status==='Active'?
                                        <MenuItem
                                        onMouseLeave={() => cancel()}
                                        onMouseEnter={() => {speakText('Press to choose account number ' + account.accountNumber)}} 
                                        key={account.id} value={account.id}>
                                            {account.accountNumber}
                                        </MenuItem>:<></>
                                    ))}
                                </Select>
                            </FormControl>
                                {/* <TextField
                                    multiline
                                    label="Sender Account Number"
                                    required
                                    name="senderAccountNumber"
                                    value={values.senderAccountNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.senderAccountNumber && !!errors.senderAccountNumber}
                                    helperText={touched.senderAccountNumber && errors.senderAccountNumber}
                                /> */}

                            {/* <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    multiline
                                    required
                                    label="Recipient Full Name"
                                    name="receiverFullName"
                                    value={values.receiverFullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.receiverFullName && !!errors.receiverFullName}
                                    helperText={touched.receiverFullName && errors.receiverFullName}
                                />
                            </FormControl> */}

                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    onMouseLeave={() => cancel()}
                                    onMouseEnter={() => {speakText('Text field to enter Recipient account number')}} 
                                    multiline
                                    required
                                    label="Recipient Account Number"
                                    name="receiverAccountNumber"
                                    value={values.receiverAccountNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.receiverAccountNumber && !!errors.receiverAccountNumber}
                                    helperText={touched.receiverAccountNumber && errors.receiverAccountNumber}
                                />
                            </FormControl>

                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>

                                <TextField
                                    onMouseLeave={() => cancel()}
                                    onMouseEnter={() => {speakText('Text field to enter transfer amount')}} 
                                    multiline
                                    required
                                    label="Transfer Amount (EGP)"
                                    name="transferAmount"
                                    type="text"
                                    value={values.transferAmount}
                                    onChange={(event) => {
                                        const numericValue = event.target.value.replace(/[^0-9]/g, "");
                                        handleChange({
                                            target: {
                                                name: "transferAmount",
                                                value: numericValue,
                                            },
                                        });
                                    }}
                                    onBlur={handleBlur}
                                    error={touched.transferAmount && !!errors.transferAmount}
                                    helperText={touched.transferAmount && errors.transferAmount}
                                />
                            </FormControl>

                            <TextField
                                onMouseLeave={() => cancel()}
                                onMouseEnter={() => {speakText('Text field to enter the purpose of the Internal transfer' )}} 
                                sx={{ gridColumn: "span 4" }}
                                variant="outlined"
                                label="Purpose"
                                InputProps={styles}
                                name="purpose"
                                value={values.purpose}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.purpose && !!errors.purpose}
                                helperText={touched.purpose && errors.purpose}
                                placeholder="Write your purpose for the transfer here in as many lines as you need"
                                multiline
                                required
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {isLoading ? (
                                <CircularProgress color="secondary" size={24} />
                            ) : (
                                <>
                                    {isConfirmed && <CheckIcon style={{ marginRight: '10px', color: 'green' }} />}
                                    {/* <Button type="submit" color="secondary" variant="contained">
                                        Confirm
                                    </Button> */}
                                    <ResponseDialog submit='CONFIRM' response='success'/>
                                </>
                            )}
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default InternalTransfer;
