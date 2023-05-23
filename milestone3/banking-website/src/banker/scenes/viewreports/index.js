import { Box, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../themes";
import { f1Drivers } from "../../../data/mockdata";

const ViewReports = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mappedArray = f1Drivers.map((character)=>{
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
      {mappedArray}
    </Box>
  );
};

export default ViewReports;
