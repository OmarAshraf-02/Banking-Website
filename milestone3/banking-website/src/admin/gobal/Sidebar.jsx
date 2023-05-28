import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from '../../themes';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

  const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
  
    return (
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
            {!isCollapsed && (
              <Box mb="25px">
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Karim G.
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    CTO
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    52-3899
                  </Typography>
                </Box>
              </Box>
            )}
  
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Admin
              </Typography>
              <Item
                title="View Admins"
                to="/viewAdmins"
                icon={<VisibilityOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Create an Admin"
                to="/createAdmin"
                icon={<AddCircleOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
  
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Bankers
              </Typography>
              <Item
                title="View Bankers"
                to="/viewBankers"
                icon={<VisibilityOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Create a Banker"
                to="/createBanker"
                icon={<AddCircleOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Contact users
              </Typography>
              <Item
                title="View Reports"
                to="/viewReport"
                icon={<BugReportOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Notify"
                to="/notify"
                icon={<CallOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    );
  };
  
  export default Sidebar;