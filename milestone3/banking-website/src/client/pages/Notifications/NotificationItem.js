import { Alert, Typography } from '@mui/material'
import React from 'react'

function NotificationItem({notification}) {
    return (
        <div className='m-3'>
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
