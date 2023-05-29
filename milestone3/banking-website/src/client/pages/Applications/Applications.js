import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../themes";
import React from 'react';
import { payBill } from '../../../store/index'
import { useDispatch, useSelector } from 'react-redux'
import Header from "../../components/Header";
import CreditCardApplicationItem from "./CreditCardApplicationItem";
import DebitCardApplicationItem from "./DebitCardApplicationItem";
import PrepaidCardApplicationItem from "./PrepaidCardApplicationItem";
import PersonalLoanApplicationItem from "./PersonalLoanApplicationItem";
import CarLoanApplicationItem from "./CarLoanApplicationItem";
import { Link } from 'react-router-dom';
import { TextField, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
function Applications() {

  const {
    loanApplication,
    creditCardApplication,
    debitCardApplication,
    prepaidCardApplication,

  } = useSelector((state) => {
    return state.clients[0].applications;
  })
  const [applications, setApplications] = React.useState('Credit Card Applications');

  const handleChange = (event) => {
    setApplications(event.target.value);
  };



  return (
    <div>
      {/* <Header title='Applications'/>
    {/* <CreditCardApplicationItem creditcard={creditCardApplication}/> */}
      {/* <DebitCardApplicationItem debitcard={debitCardApplication}/> */}
      {/* <PrepaidCardApplicationItem prepaidcard={prepaidCardApplication}/> */}
      {/* <PersonalLoanApplicationItem loan={loanApplication}/> */}
      {/* <CarLoanApplicationItem loan={loanApplication}/> */}
      <Header title={applications} subtitle=' ' />
      <FormControl fullWidth>
        <InputLabel sx={{ marginLeft: 3, marginRight: 3 }} id="demo-simple-select-label">Application Type</InputLabel>
        <Select sx={{ marginLeft: 3, marginRight: 3 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={applications}
          label="Applications"
          onChange={handleChange}
        >
          <MenuItem value={"Credit Card Applications"}>Credit Card Applications</MenuItem>
          <MenuItem value={"Debit Card Applications"}>Debit Card Applications</MenuItem>
          <MenuItem value={"Prepaid Card Applications"}>Prepaid Card Applications</MenuItem>
          <MenuItem value={"Car Loan Applications"}>Car Loan Applications</MenuItem>
          <MenuItem value={"Personal Loan Applications"}>Personal Loan Applications</MenuItem>
        </Select>
      </FormControl>
      {
        applications === "Credit Card Applications" ? <CreditCardApplicationItem creditcard={creditCardApplication} /> :
          applications === "Debit Card Applications" ? <DebitCardApplicationItem debitcard={debitCardApplication} /> :
            applications === "Prepaid Card Applications" ? <PrepaidCardApplicationItem prepaidcard={prepaidCardApplication} /> :
              applications === "Car Loan Applications" ? <CarLoanApplicationItem loan={loanApplication} /> :
                <PersonalLoanApplicationItem loan={loanApplication} />
      }
    </div>

  );
};

export default Applications;