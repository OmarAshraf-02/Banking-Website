import { Box , Typography , useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../themes";
import {seriesCharacters} from "../../../data/mockdata";
import Header from "../../components/Header";

function AllCards(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const columns = [
      { field: "id", headerName: "Card Id", flex: 0.5 },
        { field: "cardRequestedType", headerName: "Card Type", flex: 0.5 },
      {
        field: "name",
        headerName: "Owner's Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "bankAccount",
        headerName: "Owner's Bank Account",
        flex: 1,
      },
    { field: "phoneNumber", headerName: "Owner's Phone Number", flex: 0.5 },


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
            rows={seriesCharacters}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    );
  };
  
export default AllCards;