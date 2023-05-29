import { Box, Button, MenuItem, TextField , Select , FormControl , InputLabel } from "@mui/material";
import { Formik , Field  } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import Cards from 'react-credit-cards-2';
import CircularProgress from "@mui/material/CircularProgress";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import CheckIcon from '@mui/icons-material/Check';


const CreateCardForm = () => {
  // const [name , setName] = useState('');  
  const [loading, setLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showCard , setShowCard] = useState(false);  
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const cardNumber = '1234123412341234';
  const cardName = 'Karim Mohamed Gamaleldin';
  const validThru = '12/25';
  const cvc = '123';
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
  return (
    <Box m="20px">
      <Header title="Create a Bank Card" subtitle="Create a new Bank Card for a Bank Account" />

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
          // setName(values.accountName);
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
                label="Owner's Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.accountName}
                name="accountName"
                error={!!touched.accountName && !!errors.accountName}
                helperText={touched.accountName && errors.accountName}
                sx={{ gridColumn: "span 4" }}
              />
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
                <InputLabel id="cardType">Card Type</InputLabel>
                <Field
                    as={Select}
                    name='cardType'
                >
                    <MenuItem value="Credit">Credit Card</MenuItem>
                    <MenuItem value="Debit" >Debit Card</MenuItem>
                    <MenuItem value="Prepaid" >Prepaid Card</MenuItem>
                </Field>
              </FormControl>
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
      {showCard ? <Cards number={cardNumber}  expiry = {validThru} cvc={cvc} name = {cardName} focused="" /> : <></>}
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  accountName: yup.string().required("required"),
  accountNumber: yup.string().required("required"),
  cardType: yup.string().required("required"),
});
const initialValues = {
  accountName:"",
  accountNumber:"",
  cardType: "",
};

export default CreateCardForm;