import { Box, useTheme, Button , IconButton } from "@mui/material";
import Header from "../../components/Header";
import InputBase from "@mui/material/InputBase";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../../themes";
import { f1Drivers } from "../../../data/mockdata";
import { useState } from "react";

const ViewReports = () => {
  const [searchTerm , setSearchTerms] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const onChange = (event) => {
    setSearchTerms(event.target.value);
  };
  const filteredArray = f1Drivers.filter((driver) => {
    return driver.bankAccount.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const mappedArray = filteredArray.map((character)=>{
    return (
        <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            {character.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="h5" color={colors.grey[100]}>
            {`Bank Account ID: ${character.bankAccount}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Email: ${character.email}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Phone Number: ${character.phoneNumber}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Complaint: ${character.complaint}`}
          </Typography>
        </AccordionDetails>
        <Box display="flex" justifyContent="end" mt="20px" m = "10px">
            <Box m = "5px">
            <Button type="submit" color="secondary" variant="contained">
                Contact to Resolve
              </Button>
            </Box>
            <Box m = "5px">
            <Button type="submit" color="secondary" variant="contained">
                Delegate to Superior
              </Button>
            </Box>
            <Box m = "5px">
            <Button type="submit" color="secondary" variant="contained">
                Delegate to Admin
              </Button>
            </Box>
            <Box m = "5px">
            <Button type="submit" color="error" variant="contained">
                Reject
              </Button>
            </Box>
        </Box>
      </Accordion>
    );
  });
  return (
    <Box m="20px">
      <Header title="Customer Reports" subtitle="View Complains and Reports submitted by customers and Deal with them" />
      <Box display="flex" 
        backgroundColor = {colors.primary[400]}
         borderRadius="3px"
         m = "4px 0px 20px 0px"
         >
            <InputBase value={searchTerm} onChange={onChange} sx ={{ml:2 , flex:1}} placeHolder = "Search" />
            <IconButton type = "button" sx={{p:1}}>
                <SearchIcon />
            </IconButton>
            {/* <Typography variant="h3" color={colors.grey[100]}>
                    The GUC Bank Banker's Admin Panel
              </Typography> */}
         </Box>
      {mappedArray}
    </Box>
  );
};

export default ViewReports;
