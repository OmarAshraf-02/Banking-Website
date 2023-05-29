import React, { useState } from 'react';
import { Box, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, CircularProgress, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from '../../components/Header.jsx';
import BackButton from '../../../shared/components/BackButton.js';
import useMediaQuery from "@mui/material/useMediaQuery";
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import ResponseDialog from '../../components/ResponseDialog.js';
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognitionTextField from '../../components/SpeechRecognitionTextField.js';


const DomesticTransfer = () => {
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    const [isLoading, setIsLoading] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleFormSubmit = async (values, { resetForm }) => {
        setIsLoading(true);


        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsConfirmed(true);


        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsConfirmed(false);
        resetForm({ values: '' });
    };
    const accounts = useSelector((state) => {
        return state.clients[0].accounts
    })

    const initialValues = {
        // senderFullName: '',
        senderAccountNumber: '',
        // receiverFullName: '',
        receiverAccountNumber: '',
        receiverBankName: '',
        transferAmount: '',
        purpose: ''
    };

    const checkoutSchema = yup.object().shape({
        // senderFullName: yup.string().required("required"),
        senderAccountNumber: yup.string().required("required"),
        // receiverFullName: yup.string().required("required"),
        receiverAccountNumber: yup.string().required("required"),
        receiverBankName: yup.string().required("required"),
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
                <Header title='Domestic Transfer' subtitle='' />
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
                        >
                            {/* <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Sender Full Name"
                                    name="senderFullName"
                                    value={values.senderFullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.senderFullName && !!errors.senderFullName}
                                    helperText={touched.senderFullName && errors.senderFullName}
                                    multiline
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
                            {/* <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Sender Account Number"
                                    name="senderAccountNumber"
                                    value={values.senderAccountNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.senderAccountNumber && !!errors.senderAccountNumber}
                                    helperText={touched.senderAccountNumber && errors.senderAccountNumber}
                                    multiline
                                />
                            </FormControl> */}
                            {/* <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Recipient Full Name"
                                    name="receiverFullName"
                                    value={values.receiverFullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.receiverFullName && !!errors.receiverFullName}
                                    helperText={touched.receiverFullName && errors.receiverFullName}
                                    multiline
                                />
                            </FormControl> */}
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <SpeechRecognitionTextField
                                    onMouseLeave={() => cancel()}
                                    onMouseEnter={() => {speakText('Text Field to enter the recipient account number' )}} 
                                    label="Recipient Account Number"
                                    name="receiverAccountNumber"
                                    value={values.receiverAccountNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.receiverAccountNumber && !!errors.receiverAccountNumber}
                                    helperText={touched.receiverAccountNumber && errors.receiverAccountNumber}
                                    multiline
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <SpeechRecognitionTextField
                                    onMouseLeave={() => cancel()}
                                    onMouseEnter={() => {speakText('Text field to enter the recipent bank name' )}} 
                                    label="Recipient Bank Name"
                                    name="receiverBankName"
                                    value={values.receiverBankName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.receiverBankName && !!errors.receiverBankName}
                                    helperText={touched.receiverBankName && errors.receiverBankName}
                                    multiline
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <SpeechRecognitionTextField
                                    onMouseLeave={() => cancel()}
                                    onMouseEnter={() => {speakText('Text field to enter the transfer amount')}} 
                                    sx={{ gridColumn: "span 4" }}
                                    fullWidth
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
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <SpeechRecognitionTextField
                                    onMouseLeave={() => cancel()}
                                    onMouseEnter={() => {speakText('Text field to enter the purpose of the domestic transfer' )}} 
                                    label="Purpose"
                                    name="purpose"
                                    value={values.purpose}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.purpose && !!errors.purpose}
                                    helperText={touched.purpose && errors.purpose}
                                    multiline
                                />
                            </FormControl>
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

export default DomesticTransfer;
