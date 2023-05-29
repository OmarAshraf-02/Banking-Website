import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../../themes";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clickOnBell } from "../../store";
import './Notification.css'
function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const status = useSelector((state)=>{
    return state.clients[0].notifications.status
  })
  const [isShaking, setIsShaking] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clickOnBell());
    setIsShaking(true);

    // Reset shaking state after a certain duration
    setTimeout(() => {
      setIsShaking(false);
    }, 1000);
  };
  useEffect(() => {
    let shakeInterval;

    if (status === 'active') {
      shakeInterval = setInterval(() => {
        setIsShaking((prevIsShaking) => !prevIsShaking);
      }, 2000); // Set the interval duration in milliseconds (e.g., 2000ms = 2 seconds)
    }

    return () => {
      clearInterval(shakeInterval);
    };
  }, [status]);

  return (
  <Box display="flex" justifyContent="space-between" p={2}>
    <Box display="flex"
      // backgroundColor = {colors.primary[400]}
      borderRadius="3px"
    >
      {/* <InputBase sx ={{ml:2 , flex:1}} placeHolder = "Search" />
            <IconButton type = "button" sx={{p:1}}>
                <SearchIcon />
            </IconButton> */}
    </Box>
    <Box display="flex">
      <Link to='notifications'>
        <IconButton onClick={handleClick} className={isShaking  ? 'shake' : ''}>
          <NotificationsOutlinedIcon />
          {status === 'active' ? (
            <span className={`notification-badge ${isShaking  ? 'shake' : ''}`}>!</span>
          ):
          <></> 
      }
        </IconButton>
      </Link>
      <Link to='/sign-in'>
          <IconButton>
            <LogoutIcon />
          </IconButton>
      </Link>
    </Box>
  </Box>);
}
export default TopBar;