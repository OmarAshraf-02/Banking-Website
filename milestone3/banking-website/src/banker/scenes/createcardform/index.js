import { Box, Button, MenuItem, TextField , Select , FormControl , InputLabel } from "@mui/material";
import { Formik , Field  } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import Cards from 'react-credit-cards-2';
import CircularProgress from "@mui/material/CircularProgress";
import 'react-credit-cards-2/dist/es/styles-compiled.css';


const CreateCardForm = () => {
  // const [name , setName] = useState('');  
  const [loading , setLoading] = useState(false);  
  const [showCard , setShowCard] = useState(false);  
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const cardNumber = '1234123412341234';
  const cardName = 'Karim Mohamed Gamaleldin';
  const validThru = '12/25';
  const cvc = '123';
  const handleFormSubmit = async (values , {resetForm}) => {
    setLoading(true);
    resetForm({values: ''});
    await setTimeout(() => {setLoading(false)} , 5000);
    setShowCard(true);
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
              {loading ? <CircularProgress color="secondary" /> : <Button type="submit" color="secondary" variant="contained">
                Create New Card
              </Button>}
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