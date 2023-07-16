import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../themes";
import React from 'react'
import Header from "../../components/Header";

function PrepaidCardApplicationItem({ prepaidcard }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5
    },
    {
      field: "nationalIdNumber",
      headerName: "National ID Number",
      flex: 1,
    },
    {
      field: "cardholderName",
      headerName: "Card Holder Name",
      flex: 1,
      // cellClassName: "name-column--cell",
    },

    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      //   renderCell: (params) => {
      //     const amount = params.row.amount;
      //     return amount < 0 ? <span style={{ color: 'red' }}>{amount}</span> : <span style={{ color: 'green' }}>+{amount}</span>;
      //   },
    },
    {
      field: "balanceLimit",
      headerName: "Balance Limit",
      flex: 1,

    }, {
      field: "startingBalance",
      headerName: "Starting Balance",
      flex: 1,

    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const status = params.row.status;
        return status === 'Accepted' ? <span style={{ color: colors.greenAccent[500] }}>{status}</span> : status === 'Pending' ? <span style={{ color: colors.grey[500] }}>{status}</span> : <span style={{ color: colors.redAccent[300] }}> {status}</span>;
      },
    },








  ];
  return (
    <div >

      <Box m="20px">




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
            rows={prepaidcard}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>


    </div>

  )
}

export default PrepaidCardApplicationItem
