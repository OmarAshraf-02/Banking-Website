import { FormControlLabel, Radio } from '@mui/material'
import { Field, FormikProvider } from 'formik'
import { RadioGroup, TextField } from 'formik-mui'
import React from 'react'
function ClientCredentials({ formik }) {
  return (
    <div>
        <TextField 
          name="email" 
          type="email" 
          label="Email" 
          variant="standard"
          error={Boolean(formik.touched.email && formik.errors.email)}
          onChange={formik.handleChange}
          value={formik.values.email} 
          onBlur={formik.handleBlur}
           
        />
        <TextField 
          name="password" 
          label="Password" 
          type="password" 
          variant="standard" 
          error={Boolean(formik.touched.password && formik.errors.password)}
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        <TextField 
          name="phoneNumber" 
          label="Phone Number" 
          variant="standard"
          error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
        />
    </div>
  )
}

export default ClientCredentials
