import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../themes";
import React from 'react'
import Header from "../../components/Header";

function CarLoanApplicationItem({loan}) {
    const {
        personalLoanApplication,
        carLoanApplication
          
        } = loan;
        
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5
    },
    {
        field: "make",
        headerName: "Make",
        flex: 1,
      },
      {
        field: "model",
        headerName: "Model",
        flex: 1,
      },
    {
      field: "employment",
      headerName: "Employment",
      flex: 1,
    },
    {
      field:  "loanTerm",
      headerName: " loan Term",
      flex: 1,
      // cellClassName: "name-column--cell",
    },

    {
      field: "loanAmount",
      headerName: "loan Amount",
      flex: 1,
    },
    {
      field: "annualIncome",
      headerName: "Annual Income",
      flex: 1,
    //   renderCell: (params) => {
    //     const amount = params.row.amount;
    //     return amount < 0 ? <span style={{ color: 'red' }}>{amount}</span> : <span style={{ color: 'green' }}>+{amount}</span>;
    //   },
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
          rows={carLoanApplication}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
                
              
        </div>
        
    )
}

export default CarLoanApplicationItem