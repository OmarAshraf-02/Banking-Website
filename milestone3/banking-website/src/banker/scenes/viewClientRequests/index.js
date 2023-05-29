import { Box, useTheme, Button , IconButton } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../themes";
import { soccerPlayers2 } from "../../../data/mockdata";
import { useState } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";



const ViewClientRequests = () => {
  const [searchTerm , setSearchTerms] = useState('');
  const [soccerArray , setSoccerArray] = useState(soccerPlayers2);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const filteredArray = soccerArray.filter((driver) => {
    return driver.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const onChange = (event) => {
    setSearchTerms(event.target.value);
  };
  const handleAccept = (actorToAccept) => {
    const newactors = soccerArray.filter((actor)=>{
        return actor.name !== actorToAccept.name;
    });
    const newactors2 = [...newactors , {...actorToAccept , accepted: "accepted"}];
    setSoccerArray(newactors2);
  };
  const handleReject = (actorToReject) => {
    const newactors = soccerArray.filter((actor)=>{
        return actor.name !== actorToReject.name;
    });
    const newactors2 = [...newactors , {...actorToReject , accepted: "rejected"}];
    setSoccerArray(newactors2);
  };
  const mappedArray = filteredArray.map((character)=>{
    return (
        <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={character.accepted === "accepted" ? colors.greenAccent[500] : (character.accepted === "pending" ? colors.blueAccent[500] : colors.redAccent[500]) } variant="h3">
            {character.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="h5" color={colors.grey[100]}>
            {`National ID: ${character.nationalId}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Phone Number: ${character.phoneNumber}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`email: ${character.email}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Address 1: ${character.address1}`}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {`Address 2: ${character.address2}`}
          </Typography>

        </AccordionDetails>
        {character.accepted === "pending"  ? <Box display="flex" justifyContent="end" mt="20px" m = "10px">
            <Box m = "5px">
            <Button onClick={() => {handleAccept(character)}} type="submit" color="secondary" variant="contained">
                Accept
              </Button>
            </Box>
            <Box m = "5px">
            <Button onClick={() => {handleReject(character)}} type="submit" color="error" variant="contained">
                Reject
              </Button>
            </Box>
        </Box>: <></>}
      </Accordion>
    );
  });

  return (
    <Box m="20px">
      <Header title="Client Requests" subtitle="View Client Requests and Deal with them" />
      <Typography variant="h5" color={colors.grey[100]}>
        Search by Name:
      </Typography>
      <Box display="flex" 
        backgroundColor = {colors.primary[400]}
         borderRadius="3px"
         m = "4px 0px 20px 0px"
         >
            <InputBase value={searchTerm} onChange={onChange} sx ={{ml:2 , flex:1}} placeHolder = "Hello" />
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

export default ViewClientRequests;