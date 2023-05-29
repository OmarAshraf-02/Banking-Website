
import { useTheme } from '@emotion/react';
import React from 'react';
import { tokens } from '../../../themes';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import Header from '../../components/Header';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CreditCardTransactionHistory({ transactions }) {
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
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      // cellClassName: "name-column--cell",
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

  ];

  return (
    <Box m="20px">
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={ colors.greenAccent[500] }>
            View Credit Card Transaction History
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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

        </AccordionDetails>
        
      </Accordion>      
      
    </Box>
  );
};

export default CreditCardTransactionHistory;