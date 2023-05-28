import { Box , Typography , useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../themes";
import {soccerPlayers2} from "../../../data/mockdata";
import Header from "../../components/Header";

function ViewClients(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const columns = [
      {
      field: "id",
      headerName: "Bank ID",
      flex: 1,
    },

      { field: "nationalId", headerName: "NationalID", flex: 1.5 },
      
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "phoneNumber",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "address1",
        headerName: "Address 1",
        flex: 1,
      },
      {
        field: "address2",
        headerName: "Address 2",
        flex: 1,
      },

    ];
  
    return (
      <Box m="20px">
        <Header
          title="Clients"
          subtitle="List of all Clients of the bank"
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
            rows={soccerPlayers2}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    );
  };
  
export default ViewClients;