import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment, Radio, RadioGroup, FormControlLabel, FormLabel, Checkbox, Typography } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Form, Field, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from '../components/Header.jsx';
import SignaturePad from '../components/SignaturePad.js';
import { useParams } from 'react-router';
import BackButton from '../../shared/components/BackButton.js';

const PrepaidCardForm = () => {
  const [loading, setLoading] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();

  const handleFormSubmit = async (values, { resetForm }) => {
    setLoading(true);
    resetForm({ values: '' });
    await setTimeout(() => { setLoading(false) }, 5000)
  };

  const initialValues = {
    cardHolderName: '',
    nationalId: '',
    address: '',
    city: '',
    balanceLimit: '',
    startingBalance: '',

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
      <Header title='Apply for a Prepaid Card' subtitle='' />
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
                sx={{ gridColumn: "span 4" }}
                variant="outlined"
                label="National ID Number"
                InputProps={styles}
                multiline
                required
              />
              <TextField
                sx={{ gridColumn: "span 4" }}
                variant="outlined"
                label="Cardholder Name"
                InputProps={styles}
                multiline
                required
              />
              <TextField
                sx={{ gridColumn: "span 4" }}
                variant="outlined"
                label="Address"
                placeholder="Please give a current address for card delivery purposes"
                InputProps={styles}
                multiline
                required
              />
              <TextField
                sx={{ gridColumn: "span 4" }}
                variant="outlined"
                label="City"
                InputProps={styles}
                multiline
                required
              />
              <FormControl fullWidth sx={{ gridColumn: 'span 4' }}>
                <InputLabel htmlFor="outlined-adornment-amount" shrink>
                  Balance Limit
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  sx={{ height: '52.7167px' }}
                  startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                  label="Credit Limit"
                  value={creditLimit}
                  onChange={handleCreditLimitChange}
                  inputProps={{
                    'aria-label': 'credit-limit',
                  }}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ gridColumn: 'span 4' }}>
                <InputLabel htmlFor="outlined-adornment-amount" shrink>
                  Starting Balance
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  sx={{ height: '52.7167px' }}
                  startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                  label="Starting Balance"

                  inputProps={{
                    'aria-label': 'credit-limit',
                  }}
                  required
                />
              </FormControl>

              <div>
                <div>
                  <Typography variant="h5" gutterBottom>
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

export default PrepaidCardForm