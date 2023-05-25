import { Box , Typography , useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../themes";
import {transactions} from "../../../data/mockdata";
import Header from "../../components/Header";

function ViewTransactions(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const columns = [
        {field: "id" , headerName: "ID" , flex:0.5},
      { field: "senderId", headerName: "Sender ID", flex: 0.5 },
      {
        field: "senderName",
        headerName: "Sender Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      { field: "receiverId", headerName: "Receiver ID", flex: 0.5 },
      {
        field: "receiverName",
        headerName: "Receiver Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "amount",
        headerName: "Amount",
        flex: 1,
      },
      {
        field: "transferType",
        headerName: "Transfer Type",
        flex: 1,
      },

    ];
  
    return (
      <Box m="20px">
        <Header
          title="Bank Accounts"
          subtitle="List of all Bank Accounts"
        />
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
  
export default ViewTransactions;