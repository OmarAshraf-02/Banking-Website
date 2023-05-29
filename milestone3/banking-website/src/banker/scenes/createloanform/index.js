import { Box, Button, MenuItem, TextField , Select , FormControl , InputLabel } from "@mui/material";
import { Formik , Field  } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CheckIcon from '@mui/icons-material/Check';

const CreateLoanForm = () => {
 const [loanType , setLoanType] = useState('');
 const [loading, setLoading] = useState(false);
 const [isConfirmed, setIsConfirmed] = useState(false); 
  const isNonMobile = useMediaQuery("(min-width:600px)");

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
  const handleTypeSelect = (value) => {
    setLoanType(value);
  };
  return (
    <Box m="20px">
      <Header title="Create a Loan" subtitle="Help a customer to apply for a loan" />

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
        }) => {
          setLoanType(values.loanType);
          return (
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
                label="Account Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.accountNumber}
                name="accountNumber"
                error={!!touched.accountNumber && !!errors.accountNumber}
                helperText={touched.accountNumber && errors.accountNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="typeSelect">Loan Type</InputLabel>
                <Field
                    as={Select}
                    name='loanType'
                >
                    <MenuItem value="Car">Car Loan</MenuItem>
                    <MenuItem value="Personal" >Personal Loan</MenuItem>
                </Field>
              </FormControl>
            
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="termSelect">Loan Term</InputLabel>
                <Field
                    as={Select}
                    name='loanTerm'
                >
                    <MenuItem value="12" >12 Months</MenuItem>
                    <MenuItem value="24" >24 Months</MenuItem>
                    <MenuItem value="36" >36 Months</MenuItem>
                    <MenuItem value="48" >48 Months</MenuItem>
                </Field>
              </FormControl>
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="employmentStatus">Employment Status</InputLabel>
                <Field
                    as={Select}
                    name='employmentStatus'
                >
                    <MenuItem value="Unemployed" >UnEmployed</MenuItem>
                    <MenuItem value="Employed" >Employed</MenuItem>
                    <MenuItem value="Self Employed" >Self Employed</MenuItem>
                </Field>
              </FormControl>
              <TextField
              multiline
                fullWidth
                variant="filled"
                type="number"
                label="Amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
              multiline
                fullWidth
                variant="filled"
                type="number"
                label="Annual Income"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.annualIncome}
                name="annualIncome"
                error={!!touched.annualIncome && !!errors.annualIncome}
                helperText={touched.annualIncome && errors.annualIncome}
                sx={{ gridColumn: "span 2" }}
              />
                            {loanType.includes("Car")? 
              <>
              <TextField
              multiline
              fullWidth
              variant="filled"
              type="text"
              label="Make"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.make}
              name="make"
              error={!!touched.make && !!errors.make}
              helperText={touched.make && errors.make}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
            multiline
                fullWidth
                variant="filled"
                type="number"
                label="Year of Manufacturing"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.yearOfManufacturing}
                name="yearOfManufacturing"
                error={!!touched.yearOfManufacturing && !!errors.yearOfManufacturing}
                helperText={touched.yearOfManufacturing && errors.yearOfManufacturing}
                sx={{ gridColumn: "span 2" }}
              />
            <TextField
            multiline
                fullWidth
                variant="filled"
                type="text"
                label="Model"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.model}
                name="model"
                error={!!touched.model && !!errors.model}
                helperText={touched.model && errors.model}
                sx={{ gridColumn: "span 4" }}
              />
              </>
            :<></>
              }
                {loanType.includes('Personal') ? <TextField
                multiline
                fullWidth
                variant="filled"
                type="text"
                label="Loan Reason"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.loanReason}
                name="loanReason"
                error={!!touched.loanReason && !!errors.loanReason}
                helperText={touched.loanReason && errors.loanReason}
                sx={{ gridColumn: "span 4" }}
              /> : <></>}
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
        }
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  accountNumber: yup.string().required("required"),
  loanType: yup.string(),
  loanReason: yup.string(),
  amount: yup.string().required("required"),
  make: yup.string(),
  model: yup.string(),
  yearOfManufacturing: yup.string(),
  loanTerm: yup.string(),
  employmentStatus: yup.string(),
  annualIncome: yup.string().required("required"),
});
const initialValues = {
  accountNumber:"",
  loanType: "",
  loanReason: "",
  amount: "",
  make: "",
  model: "",
  yearOfManufacturing: "",
  loanTerm: "",
  employmentStatus: "",
  annualIncome: ""
};

export default CreateLoanForm;