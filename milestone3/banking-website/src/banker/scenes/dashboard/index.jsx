import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../themes";
import { marvelCharacters , actors , f1Drivers , seriesCharacters} from "../../../data/mockdata";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const notificationMappedArray = marvelCharacters.map((hero , i) => {
    return (
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
                  {hero.name} ({hero.position})
                </Typography>
                <Typography color={colors.grey[100]}>
                  {hero.notification}
                </Typography>
              </Box>
            </Box>
    );
  });
  const accountRequests = actors.map((actor , i) => {
    return (
        <Box
              key={`${actor.id}`}
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
                  {actor.name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  email: {actor.email}
                </Typography>
              </Box>
            </Box>
    );
  });
  const reportMappedArray = f1Drivers.map((driver , i) => {
    return (
        <Box
              key={`${driver.id}`}
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
                  {driver.name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {driver.complaint}
                </Typography>
              </Box>
            </Box>
    );
  });
  const cardRequests = seriesCharacters.map((actor , i) => {
    return (
        <Box
              key={`${actor.id}`}
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
                  {actor.name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  email: {actor.email}
                </Typography>
              </Box>
            </Box>
    );
  });
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
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
            title="44"
            subtitle="Accounts Created this Month"
            progress="0.75"
            increase="+14%"
            icon={
              <AccountCircleOutlinedIcon
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
            title="97"
            subtitle="Credit Cards issued this Month"
            progress="0.50"
            increase="+21%"
            icon={
              <CreditCardOutlinedIcon
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
            title="32"
            subtitle="Loans issued this Month"
            progress="0.30"
            increase="+5%"
            icon={
              <CreateOutlinedIcon
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
            title="132"
            subtitle="Report handled this month"
            progress="0.80"
            increase="+43%"
            icon={
              <ReportGmailerrorredOutlinedIcon
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
            <Typography color={colors.blueAccent[500]} variant="h5" fontWeight="600">
              Recent Notifications
            </Typography>
          </Box>
            {notificationMappedArray}
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
            <Typography color={colors.blueAccent[500]} variant="h5" fontWeight="600">
              Recent Account Requests
            </Typography>
          </Box>
          {accountRequests}
           
        </Box>
         {/* ROW 3 */}
         <Box
          gridColumn="span 8"
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
            <Typography color={colors.blueAccent[500]} variant="h5" fontWeight="600">
              Recent Reports
            </Typography>
          </Box>
            {reportMappedArray}
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
            <Typography color={colors.blueAccent[500]} variant="h5" fontWeight="600">
              Recent Card Requests
            </Typography>
          </Box>
          {cardRequests}
           
        </Box>

        </Box>
        {/* ROW 3 */}
        
        
      </Box>
  );
};

export default Dashboard;