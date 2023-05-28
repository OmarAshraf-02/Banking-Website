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
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

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
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="44"
            subtitle="Reports Handled this month"
            progress="0.75"
            increase="+14%"
            icon={
              <BugReportOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="24565"
            subtitle="Currently Active Users"
            progress="0.80"
            increase="+43%"
            icon={
              <AccountCircleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
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
            <Typography color={colors.blueAccent[500]} variant="h5" fontWeight="600">
              Recent Notifications
            </Typography>
          </Box>
            {notificationMappedArray}
          </Box>
         {/* ROW 3 */}
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
            <Typography color={colors.blueAccent[500]} variant="h5" fontWeight="600">
              Recent Reports
            </Typography>
          </Box>
            {reportMappedArray}
          </Box>

        </Box>
        {/* ROW 3 */}
            
      </Box>
  );
};

export default Dashboard;