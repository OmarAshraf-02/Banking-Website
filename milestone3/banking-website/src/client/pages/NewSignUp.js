import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik'
import { Box, Button, Select, InputLabel, MenuItem, FormControl, InputAdornment, OutlinedInput, Checkbox, Radio, FormControlLabel, FormLabel, Stepper, } from "@mui/material";
import { TextField, RadioGroup, SimpleFileUpload } from 'formik-mui'
import * as yup from 'yup';


const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

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

const textFieldStyle = {
    textField: {
        height: '52.7167px', // Adjust the height as per your requirement
    },
};

function NewSignUp() {
    return (
        <Card>
            <CardContent>
                <Formik initialValues={initialValues}
                >
                    <Form autoComplete="off">
                        <div>
                            <Field name="firstName" component={TextField} label="First Name" variant="standard" />
                            <Field name="lastName" component={TextField} label="Last Name" variant="standard" />
                            <Field component={RadioGroup} name="gender">
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male" />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female" />
                            </Field>
                        </div>

                        <div>
                            <Field name="email" component={TextField} type="email" label="Email" variant="standard" />
                            <Field name="password" component={TextField} label="Password" type="password" variant="standard" />
                            <Field name="phoneNumber" component={TextField} label="Phone Number" variant="standard" />
                        </div>

                        <div>
                            <Field name="city" component={TextField} label="City" variant="standard" />
                            <Field name="address" component={TextField} label="Address" variant="standard" />
                        </div>

                        <div>
                            <Field component={SimpleFileUpload} name="idImage" label="Personal Identification Document" />
                        </div>




                    </Form>
                </Formik>
            </CardContent>
        </Card>

    )
}

export default NewSignUp
