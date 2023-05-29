import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import React from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

const Header = ({ title, subtitle }) => {
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div onMouseLeave={() => cancel()} onMouseEnter={() => {
            const x = title? title : " ";
            const y = subtitle? subtitle : " ";
            speakText(x + " " + y)}}>
            <Box m="30px">
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    {title}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                    {subtitle}
                </Typography>
            </Box>
        </div>
    );
};

export default Header;