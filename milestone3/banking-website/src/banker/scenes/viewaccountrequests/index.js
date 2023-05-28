import { Box, useTheme, Button , IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../../themes";
import { actors } from "../../../data/mockdata";
import { useState } from "react";

const ViewAccountRequests = () => {
  const [searchTerm , setSearchTerms] = useState('');
  const [actorsArray , setActorsArray] = useState(actors);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const onChange = (event) => {
    setSearchTerms(event.target.value);
  };
  const filteredArray = actorsArray.filter((actor) => {
    return actor.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const handleAccept = (actorToAccept) => {
    const newactors = actorsArray.filter((actor)=>{
        return actor.name !== actorToAccept.name;
    });
    const newactors2 = [...newactors , {...actorToAccept , accepted: "accepted"}];
    setActorsArray(newactors2);
  };
  const handleReject = (actorToReject) => {
    const newactors = actorsArray.filter((actor)=>{
        return actor.name !== actorToReject.name;
    });
    const newactors2 = [...newactors , {...actorToReject , accepted: "rejected"}];
    setActorsArray(newactors2);
  };
  const mappedArray = filteredArray.map((actor)=>{
    return (
        <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={actor.accepted === "accepted" ? colors.greenAccent[500] : (actor.accepted === "pending" ? colors.blueAccent[500] : colors.redAccent[500]) } variant="h3">
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
        {actor.accepted === "pending"  ? <Box display="flex" justifyContent="end" mt="20px" m = "10px">
            <Box m = "5px">
            <Button onClick={() => {handleAccept(actor)}} type="submit" color="secondary" variant="contained">
                Accept
              </Button>
            </Box>
            <Box m = "5px">
            <Button onClick={() => {handleReject(actor)}} type="submit" color="error" variant="contained">
                Reject
              </Button>
            </Box>
        </Box>: <></>}
      </Accordion>
    );
  });

  return (
    <Box m="20px">
      <Header title="Bank Account Requests" subtitle="View Bank Account Requests and Deal with them" />
      <Typography variant="h5" color={colors.grey[100]}>
        Search by Client Name:
      </Typography>
      <Box display="flex" 
        backgroundColor = {colors.primary[400]}
         borderRadius="3px"
         m = "2px 0px 20px 0px"
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

export default ViewAccountRequests;