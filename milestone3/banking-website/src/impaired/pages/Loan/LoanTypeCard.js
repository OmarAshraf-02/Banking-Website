import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { tokens, useMode } from '../../../themes';
import { useSpeechSynthesis } from 'react-speech-kit';

function LoanTypeCard({ img, alt, title, summary, to }) {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);
    const { speak, cancel } = useSpeechSynthesis();

    const speakText = (text) => {
        speak({ text });
    };
    return (
        <Link to={to}>

            <Card sx={{ maxWidth: 400, backgroundColor: colors.primary[400], margin: 5 }}
                onMouseLeave={() => cancel()} onMouseEnter={() => { speakText(title + " , " + summary) }}>
                <CardActionArea>
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={alt}
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {summary}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Link>
    )
}

export default LoanTypeCard
