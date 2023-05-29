import { Alert, Typography } from '@mui/material'
import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';

function NotificationItem({notification}) {
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    return (
        <div className='m-3' onMouseLeave={() => cancel()} onMouseEnter={() => {speakText(notification.message + " at " + notification.date)}}>
            <Alert severity={notification.severity}>
                <Typography>
                    {notification.message}
                </Typography>
                <Typography>
                    {notification.date}
                </Typography>
            </Alert>   
        </div>
        
    )
}

export default NotificationItem
