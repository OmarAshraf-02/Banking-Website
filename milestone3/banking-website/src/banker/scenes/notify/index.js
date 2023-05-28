import { Box, Button, MenuItem, TextField , Select , FormControl , InputLabel } from "@mui/material";
import { Formik , Field  } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const NotifyUser = () => {
 const [notificationType , setnotificationType] = useState('');
  const [loading , setLoading] = useState(false);  
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values , {resetForm}) => {
    setLoading(true);
    resetForm({values: ''});
    await setTimeout(() => {setLoading(false)} , 5000)
  };
  return (
    <Box m="20px">
      <Header title="Notify" subtitle="Notify the user(s) of the system about a certain event" />

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
          setnotificationType(values.typeOfNotifcation);
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
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="typeOfNotifcation">Type of Notification</InputLabel>
                <Field
                    as={Select}
                    name='typeOfNotifcation'
                >
                    <MenuItem value="Banker">A Banker</MenuItem>
                    <MenuItem value="allBankers" >All Bankers</MenuItem>
                    <MenuItem value="Admin">An Admin</MenuItem>
                    <MenuItem value="allAdmins" >All Admins</MenuItem>
                    <MenuItem value="Client">A Client</MenuItem>
                    <MenuItem value="allClients" >All Clients</MenuItem>
                </Field>
              </FormControl>
                {notificationType === 'Banker' ? 
                <TextField
                multiline
                fullWidth
                variant="filled"
                type="text"
                label="Banker Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bankerId}
                name="bankerId"
                error={!!touched.bankerId && !!errors.bankerId}
                helperText={touched.bankerId && errors.bankerId}
                sx={{ gridColumn: "span 2" }}
              /> : <></>}
                {notificationType === 'Client' ? 
                <TextField
                multiline
                fullWidth
                variant="filled"
                type="text"
                label="Client Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.clientId}
                name="clientId"
                error={!!touched.clientId && !!errors.clientId}
                helperText={touched.clientId && errors.clientId}
                sx={{ gridColumn: "span 2" }}
              /> : <></>}
              {notificationType === 'Admin' ? 
                <TextField
                multiline
                fullWidth
                variant="filled"
                type="text"
                label="Admin Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adminId}
                name="adminId"
                error={!!touched.adminId && !!errors.adminId}
                helperText={touched.adminId && errors.adminId}
                sx={{ gridColumn: "span 2" }}
              /> : <></>}
                <TextField
                multiline
                fullWidth
                variant="filled"
                type="text"
                label="Notification"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.notification}
                name="notification"
                error={!!touched.notification && !!errors.notification}
                helperText={touched.notification && errors.notification}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              {loading ? <CircularProgress color="secondary" /> : <Button type="submit" color="secondary" variant="contained">
                Send Notifications
              </Button>}
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
  notification: yup.string().required("required"),
  typeOfNotifcation: yup.string().required("required"),
  bankerId: yup.string(),
  adminId: yup.string(),
  clientId: yup.string(),
  typeOfNotifcation: yup.string().required("required"),
});
const initialValues = {
    notification: "",
    bankerId: "",
    clientId: "",
    adminId: "",
    typeOfNotifcation: ""
};

export default NotifyUser;