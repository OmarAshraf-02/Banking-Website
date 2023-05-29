import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../themes";
import { mockTransactions } from "../../../data/mockdata";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import { marvelCharacters } from "../../../data/mockdata";
import { useDispatch, useSelector } from "react-redux";
import { redeemPoints } from "../../../store";
import RedeemPointsDialog from "../../components/RedeemPointsDialog";
import { useEffect } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
const HomePage = () => {
//   const { speak } = useSpeechSynthesis();

//   const speakText = (text) => {
//     speak({ text });
//   };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const creditCards = useSelector((state) => {
    return state.clients[0].creditCards;
  })
  const creditCardArray = creditCards.map((hero, i) => {
    return (
      hero.points===0?<></>:
<Box
  key={`${hero.id}`}
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  borderBottom={`4px solid ${colors.primary[500]}`}
  p="15px"
>
  <Box>
    <Typography
      color={colors.greenAccent[500]}
      variant="h4"
      fontWeight="600"
    >
      {hero.cardNumber}
    </Typography>
    <Typography
      color={colors.grey[100]}
      variant="h4"
      fontWeight="600"
    >
      Points: {hero.points}
    </Typography>
  </Box>
  <RedeemPointsDialog creditCard={hero}/>
  {/* <Button color="secondary" variant="contained" style={{ marginLeft: '10px' , color: colors.grey[100] }}>
    Redeem
  </Button> */}
</Box>

    );
  });
//   useEffect(() => {
//     // Get all the text content from the page
//     const pageText = document.body.innerText;

//     // Speak the entire page content
//     speak({ text: pageText });
//   }, []);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HOME" subtitle="Welcome to 404 Bank" />


      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="10470"
            subtitle="Net Balance"
            progress="0.21"
            increase="+21%"
            icon={
              <AttachMoneyOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2"
            subtitle="Monthly Loan Installments"
            progress="0.30"
            increase="+5%"
            icon={
              <EventRepeatOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="4"
            subtitle="Due Bills"
            progress="0.75"
            increase="+14%"
            icon={
              <ReceiptOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="3"
            subtitle="Pending Applications"
            progress="0.80"
            increase="+43%"
            icon={
              <PendingActionsOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Accounts' Balances
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $10,470.5
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}


        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Expense Chart
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Redeem Points
            </Typography>
          </Box>
          {
          creditCardArray.every(fragment => fragment.toString() === '<></>')?
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600" sx={{padding: '15px'}}>
            No Credit Cards with Points
          </Typography>
          :
          creditCardArray
          }
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;