import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import { useSpeechSynthesis } from 'react-speech-kit';


function BackButton({ to }) {
    const location = useLocation();
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    const currentPath = location.pathname.split("/");
    // console.log(currentPath)
    return (
        <Link
        onMouseLeave={() => cancel()} 
        onMouseEnter={() => {speakText("Back Button, Return to the previous page")}}
         to={`/${currentPath[1]}${to}`}>
            <IconButton>
                <ArrowBackIosIcon />
            </IconButton>
        </Link>
    )
}

export default BackButton