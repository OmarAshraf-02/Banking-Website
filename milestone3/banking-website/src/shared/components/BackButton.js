import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';

function BackButton({ to }) {
    const location = useLocation();
    const currentPath = location.pathname.split("/");
    // console.log(currentPath)
    return (
        <Link to={`/${currentPath[1]}${to}`}>
            <IconButton>
                <ArrowBackIosIcon />
            </IconButton>
        </Link>
    )
}

export default BackButton