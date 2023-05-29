import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import React from 'react';
import { payBill } from '../../store/index'
import { useDispatch, useSelector } from 'react-redux'
import Header from "../components/Header";

function TransactionHistory({ accountNumbers, isTitle }) {

  const dispatch = useDispatch();
  var transactions = useSelector((state) => {
    return state.clients[0].transactions;
  })
  if (accountNumbers !== undefined) {
    transactions = transactions.filter((transaction) => {
      return accountNumbers.includes(transaction.accountNumber)
    })
  }
  if(isTitle===undefined){
    isTitle=true;
  }

  // console.log(transactions);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "Transaction ID",
      flex: 0.5
    },
    {
      field: "dateTime",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "accountNumber",
      headerName: "Account Number",
      flex: 1,
      // cellClassName: "name-column--cell",
    },

    {
      field: "transactionType",
      headerName: "Transaction Type",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      renderCell: (params) => {
        const amount = params.row.amount;
        return amount < 0 ? <span style={{ color: 'red' }}>{amount}</span> : <span style={{ color: 'green' }}>+{amount}</span>;
      },
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,

    }

  ];

  return (
    <Box m="20px">
      {
        isTitle?
          <Header title='Transaction History' />
        :
          <Header subtitle='Transaction History' />
      }
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={transactions}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default TransactionHistory;