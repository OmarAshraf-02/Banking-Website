import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';

function BackButton({ to }) {
    return (
        <Link to={`/client${to}`}>
            <IconButton>
                <ArrowBackIosIcon />
            </IconButton>
        </Link>
    )
}

export default BackButton