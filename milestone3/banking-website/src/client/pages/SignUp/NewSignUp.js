import React, { useState } from 'react';
import { Card, CardContent, FormHelperText, Grid, Step, StepLabel, Typography } from '@mui/material';
import { Field, Form, Formik, FormikConfig, FormikValues, useFormikContext, useFormik  } from 'formik'
import { Box, Button, Select, InputLabel, MenuItem, FormControl, InputAdornment, OutlinedInput, Checkbox, Radio, FormControlLabel, FormLabel, Stepper, } from "@mui/material";
import { TextField, RadioGroup, SimpleFileUpload } from 'formik-mui'
import * as yup from 'yup';
import ClientInfo from './ClientInfo';
import ClientCredentials from './ClientCredentials';
import ClientInfo2 from './ClientInfo2';



const textFieldStyle = {
    textField: {
        height: '52.7167px', // Adjust the height as per your requirement
    },
};

function NewSignUp() {
      const steps = ['Step 1', 'Step 2', 'Step 3'];

      const initialValues = {
          firstName: '',
          lastName: '',
          gender: '',
          phoneNumber: '',
          email: '',
          password: '',
          city: '',
          address: '',
          idImage: ''
      }
      const validationSchema = yup.object({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
        phoneNumber: yup.string().required('Phone Number is required'),
        city: yup.string().required('City is required'),
        address: yup.string().required('Address is required'),
        idImage: yup.mixed().required('Personal Identification Document is required'),
      });
      const [activeStep, setActiveStep] = useState(0);

      const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
      };
    
      const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: () => {
          if (activeStep === steps.length - 1) {
            console.log('last step');
          } else {
            setActiveStep((prevStep) => prevStep + 1);
          }
        }
      });
    
    
    // const { values, handleSubmit, isSubmitting, setFieldValue } = useFormikContext();
  
    // const handleNext = () => {
    //   // You can implement additional validation or logic before proceeding to the next step
    //   setFieldValue('activeStep', values.activeStep + 1);
    // };
  
    // const handleBack = () => {
    //   setFieldValue('activeStep', values.activeStep - 1);
    // };
  
    // const handleSubmitForm = async (values, actions) => {
    //   // Implement your form submission logic here
    //   console.log(values);
    // };
    const formContent = (step) => {
        switch(step) {
          case 0:
            return <ClientInfo formik={formik} />;
          case 1:
            return <ClientCredentials formik={formik} />;
          case 2:
            return <ClientInfo2 formik={formik} />;
          default:
            return <div>404: Not Found</div>
        }
      };
    return ( 
      <Card>
        <CardContent>
          <Stepper
            activeStep={activeStep}
            orientation="horizontal"
          >
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ padding: '20px' }}
            >
              {formContent(activeStep)}
            </Grid>
            {formik.errors.submit && (
              <Grid
                item
                xs={12}
              >
                <FormHelperText error>
                  {formik.errors.submit}
                </FormHelperText>
              </Grid>
            )}
            <Grid
              item
              xs={12}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
              <Button>
                Submit
              </Button>
              ) : (
                <Button onClick={formik.handleSubmit}>
                  Next
                </Button>
              ) }
            </Grid>
          </Grid>
          {/* <Field type="hidden" name="activeStep" /> */}
      </CardContent>
    </Card>
    );
  }
  
// function NewSignUp() {
//     return (
//         <Card>
//             <CardContent>
//                 <Formik initialValues={initialValues}>
//                     <Form autoComplete="off">
//                         <div>
//                             <Field name="firstName" component={TextField} label="First Name" variant="standard" />
//                             <Field name="lastName" component={TextField} label="Last Name" variant="standard" />
//                             <Field component={RadioGroup} name="gender">
//                                 <FormControlLabel
//                                     value="male"
//                                     control={<Radio />}
//                                     label="Male" />
//                                 <FormControlLabel
//                                     value="female"
//                                     control={<Radio />}
//                                     label="Female" />
//                             </Field>
//                         </div>
//                         <div>
//                             <Field name="email" component={TextField} type="email" label="Email" variant="standard" />
//                             <Field name="password" component={TextField} label="Password" type="password" variant="standard" />
//                             <Field name="phoneNumber" component={TextField} label="Phone Number" variant="standard" />
//                         </div>

//                         <div>
//                             <Field name="city" component={TextField} label="City" variant="standard" />
//                             <Field name="address" component={TextField} label="Address" variant="standard" />
//                         </div>

//                         <div>
//                             <Field component={SimpleFileUpload} name="idImage" label="Personal Identification Document" />
//                         </div>
//                     </Form>
//                 </Formik>
//             </CardContent>
//         </Card>

//     )
// }

export default NewSignUp;
