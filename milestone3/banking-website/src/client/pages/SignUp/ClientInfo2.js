import { Field, FormikProvider } from 'formik'
import { SimpleFileUpload, TextField } from 'formik-mui'
import React from 'react'

function ClientInfo2({ formik }) {
  return (
      <div>
        <TextField 
          name="city" 
          label="City" 
          variant="standard" 
          error={Boolean(formik.touched.city && formik.errors.city)}
          onChange={formik.handleChange}
          value={formik.values.city}
          onBlur={formik.handleBlur}
        />
        <TextField 
          name="address" 
          label="Address" 
          variant="standard"
          error={Boolean(formik.touched.address && formik.errors.address)}
          onChange={formik.handleChange}
          value={formik.values.address} 
          onBlur={formik.handleBlur}
        />
        <SimpleFileUpload 
          name="idImage" 
          label="Personal Identification Document" 
          error={Boolean(formik.touched.idImage && formik.errors.idImage)}
          onChange={formik.handleChange}
          value={formik.values.idImage}
          onBlur={formik.handleBlur}
        />
      </div>
  )
}

export default ClientInfo2
