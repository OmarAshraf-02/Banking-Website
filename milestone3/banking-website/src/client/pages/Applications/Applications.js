import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../themes";
import React from 'react';
import { payBill } from '../../../store/index'
import { useDispatch, useSelector } from 'react-redux'
import Header from "../../components/Header";
import CreditCardApplicationItem from "./CreditCardApplicationItem";

function Applications() {

    const {
      loanApplication,
      creditCardApplication,
        debitCardApplication,
        prepaidCardApplication,
        
      } = useSelector((state)=>{
        return state.clients[0].applications;
      })
console.log(creditCardApplication)
  return (
    <div>
    <Header title='Applications'/>
    {creditCardApplication.map(creditcard=>{
      return <CreditCardApplicationItem creditcard={creditcard}/>
    })}
    
  </div>
  );
};

export default Applications;