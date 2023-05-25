import { FormControlLabel, Radio } from '@mui/material'
import { Field, FormikProvider } from 'formik'
import { RadioGroup, TextField } from 'formik-mui'
import React from 'react'

function ClientInfo({ formik }) {
  return (
      <div>
        <TextField 
          name="firstName" 
          label="First Name" 
          variant="standard" 
          error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
        />
        <TextField 
          name="lastName" 
          label="Last Name" 
          variant="standard" 
          error={Boolean(formik.touched.lastName && formik.errors.lastName)}
          onChange={formik.handleChange}
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
        />
        <RadioGroup 
          component={RadioGroup} 
          name="gender"
          error={Boolean(formik.touched.gender && formik.errors.gender)}
          onChange={formik.handleChange}
          value={formik.values.gender}
          onBlur={formik.handleBlur}
        >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </div>
        
  )
}

export default ClientInfo
