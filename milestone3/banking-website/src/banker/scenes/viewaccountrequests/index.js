import { Box, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../themes";
import { actors } from "../../../data/mockdata";

const ViewAccountRequests = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mappedArray = actors.map((actor)=>{
    const x = 'dfjaljfl'
    return (
        <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            {actor.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Total Bank Balance: ${actor.totalBankBalance}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Number of Accounts: ${actor.numberOfAccounts}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Email: ${actor.email}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Phone Number: ${actor.phoneNumber}`}
          </Typography>

        </AccordionDetails>
        <Box display="flex" justifyContent="end" mt="20px" m = "10px">
            <Box m = "5px">
            <Button type="submit" color="secondary" variant="contained">
                Accept
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
      <Header title="Bank Account Requests" subtitle="View Bank Account Requests and Deal with them" />
      {mappedArray}
    </Box>
  );
};

export default ViewAccountRequests;