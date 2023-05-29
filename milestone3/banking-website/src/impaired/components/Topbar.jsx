import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
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
import { useSpeechSynthesis } from 'react-speech-kit';


function TopBar() {
  const { speak , cancel } = useSpeechSynthesis();
  const speakText = (text) => {
    speak({ text });
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const status = useSelector((state)=>{
    return state.clients[0].notifications.status
  })
  const dispatch = useDispatch();
  return (<Box display="flex" justifyContent="space-between" p={2}>
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
        <IconButton onMouseLeave={() => {cancel()}} onMouseEnter={() => {speakText("Notifications")}} onClick={()=>dispatch(clickOnBell())}>
          <NotificationsOutlinedIcon />
          {status === 'active' ? (
        <span
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
          }}
        >
          !
        </span>):
       <></> 
      }
        </IconButton>
      </Link>
      <Link onMouseLeave={() => {cancel()}} onMouseEnter={() => {speakText("log out")}} to='/sign-in'>
          <IconButton>
            <LogoutIcon />
          </IconButton>
      </Link>
    </Box>
  </Box>);
}
export default TopBar;