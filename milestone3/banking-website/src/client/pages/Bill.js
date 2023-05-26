import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import React, { useState } from 'react';
import { payBill } from '../../store/index'
import { useDispatch, useSelector } from 'react-redux'
import Header from "../components/Header";
import SimpleDialog from "../components/SimpleDialog";

function Bill() {
  const accounts = useSelector((state) => {
    return state.clients[0].accounts
  })
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(accounts[0].accountNumber);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    console.log(value);
  };

  
  const Dialog = ({params})=> (
    <div>
      <Button
        variant="contained"
        size="small"
        style={{ marginLeft: 16 }}
        tabIndex={params.hasFocus ? 0 : -1}
        //() => dispatch(payBill(params.row.id))
        onClick={handleClickOpen}
      >
        Pay
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        accounts={accounts}
        params={params}
      />
    </div>
  );
  const bills = useSelector((state) => {
    return state.clients[0].bills
  })
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      flex: 1,
    },
    {
      field: "payee",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "pay",
      headerName: "Pay",
      flex: 1,
      renderCell: (params) => {
        // console.log(params)
        return (
          <Dialog params={params}/>
        )

      }
    },

  ];

  return (
    <Box m="20px">
      <Header title='Bills' subtitle='' />
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
          rows={bills}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Bill;