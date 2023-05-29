import React, { useState } from 'react';
import { Box, Button, TextField, InputLabel, FormControl, OutlinedInput, InputAdornment, CircularProgress, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from '../../components/Header.jsx';
import BackButton from '../../../shared/components/BackButton.js';
import useMediaQuery from "@mui/material/useMediaQuery";
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import ResponseDialog from '../../components/ResponseDialog.js';

const InternationalTransfer = () => {
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

    const initialValues = {
        // senderFullName: '',
        senderAccountNumber: '',
        transferAmount: '',
        transferCurrency: '',
        recipientCountry: '',
        recipientCity: '',
        recipientSwiftBIC: '',
        recipientIBANorAccountNumber: '',
        recipientBankName: '',
        purpose: ''
    };

    const checkoutSchema = yup.object().shape({
        // senderFullName: yup.string().required("Sender Full Name is required"),
        senderAccountNumber: yup.string().required("Sender Account Number is required"),
        transferAmount: yup.number().required("Transfer Amount is required"),
        transferCurrency: yup.string().required("Transfer Currency is required"),
        recipientCountry: yup.string().required("Recipient Country is required"),
        recipientCity: yup.string().required("Recipient City is required"),
        recipientSwiftBIC: yup.string().required("Recipient Swift BIC is required"),
        recipientIBANorAccountNumber: yup.string().required("Recipient IBAN or Account Number is required"),
        recipientBankName: yup.string().required("Recipient Bank Name is required"),
        purpose: yup.string().required("Purpose is required"),
    });
    const transferCurrencies = [
        { value: 'EGP', label: 'Egyptian Pound (EGP)' },
        { value: 'USD', label: 'US Dollar ($)' },
        { value: 'GBP', label: 'British Pound (£)' },
        { value: 'EUR', label: 'Euro (€)' },
        { value: 'JPY', label: 'Japanese Yen (¥)' }
    ];
    const accounts = useSelector((state) => {
        return state.clients[0].accounts
    })
    return (
        <Box m="20px">
            <Box display='flex'  alignItems="center">
                <BackButton to="/transfer" />
                <Header title='International Transfer' subtitle='' />
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
                                    required
                                    name="senderFullName"
                                    value={values.senderFullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.senderFullName && !!errors.senderFullName}
                                    helperText={touched.senderFullName && errors.senderFullName}
                                    multiline
                                />
                            </FormControl> */}
                            {/* <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Sender Account Number"
                                    required
                                    name="senderAccountNumber"
                                    value={values.senderAccountNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.senderAccountNumber && !!errors.senderAccountNumber}
                                    helperText={touched.senderAccountNumber && errors.senderAccountNumber}
                                    multiline
                                />
                            </FormControl> */}
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="sender-account-number-label">Sender Account Number</InputLabel>
                                <Select
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
                                        <MenuItem key={account.id} value={account.id}>
                                            {account.accountNumber}
                                        </MenuItem>:<></>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="transfer-currency-label">Transfer Currency</InputLabel>
                                <Select
                                    labelId="transfer-currency-label"
                                    id="transfer-currency"
                                    required
                                    name="transferCurrency"
                                    value={values.transferCurrency}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.transferCurrency && !!errors.transferCurrency}
                                    sx={{ height: '52.7167px' }}
                                >
                                    {transferCurrencies.map((currency) => (
                                        <MenuItem key={currency.value} value={currency.value}>
                                            {currency.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Transfer Amount"
                                    name="transferAmount"
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
                                    multiline
                                    required
                                />
                            </FormControl>

                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Recipient Country"
                                    name="recipientCountry"
                                    value={values.recipientCountry}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.recipientCountry && !!errors.recipientCountry}
                                    helperText={touched.recipientCountry && errors.recipientCountry}
                                    multiline
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Recipient City"
                                    name="recipientCity"
                                    value={values.recipientCity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.recipientCity && !!errors.recipientCity}
                                    helperText={touched.recipientCity && errors.recipientCity}
                                    multiline
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Recipient Swift/BIC"
                                    name="recipientSwiftBIC"
                                    value={values.recipientSwiftBIC}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.recipientSwiftBIC && !!errors.recipientSwiftBIC}
                                    helperText={touched.recipientSwiftBIC && errors.recipientSwiftBIC}
                                    multiline
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Recipient IBAN or Account Number"
                                    name="recipientIBANorAccountNumber"
                                    value={values.recipientIBANorAccountNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.recipientIBANorAccountNumber && !!errors.recipientIBANorAccountNumber}
                                    helperText={touched.recipientIBANorAccountNumber && errors.recipientIBANorAccountNumber}
                                    multiline
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Recipient Bank Name"
                                    name="recipientBankName"
                                    value={values.recipientBankName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.recipientBankName && !!errors.recipientBankName}
                                    helperText={touched.recipientBankName && errors.recipientBankName}
                                    multiline
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <TextField
                                    label="Purpose"
                                    name="purpose"
                                    value={values.purpose}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.purpose && !!errors.purpose}
                                    helperText={touched.purpose && errors.purpose}
                                    multiline
                                    required
                                />
                            </FormControl>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            {isLoading ? (
                                <CircularProgress color="secondary" size={24} />
                            ) : (
                                <>
                                    {isConfirmed && <CheckIcon style={{ marginRight: '10px', color: 'green' }} />}
                                    <Button type="submit" color="secondary" variant="contained">
                                        Confirm
                                    </Button>
                                    {/* <ResponseDialog submit='CONFIRM' response='success'/> */}
                                </>
                            )}
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default InternationalTransfer;
