import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { payBill, reportTheftLossDamage } from '../../store';
import Avatar from '@mui/material/Avatar';
import { Button, DialogActions, DialogContent, DialogContentText, Slide } from '@mui/material';
import { useParams } from 'react-router';
import { useSpeechSynthesis } from 'react-speech-kit';


function ApplyForReplacementDialog() {
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    const dispatch = useDispatch();
    const { id } = useParams();
    const card = useSelector((state)=>{
        return state.clients[0].creditCards.find((card)=>{
            return card.id === Number(id);
        })
    }) 
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        dispatch(reportTheftLossDamage({
            report: {},
            creditCard: card
        }))
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
            onMouseLeave={() => cancel()} 
            onMouseEnter={() => {speakText("Report button to send your report")}}
            type="submit" color="secondary" variant="contained" onClick={handleClickOpen}>
                Report
            </Button>
            <Dialog
                onMouseLeave={() => cancel()} 
                onMouseEnter={() => {speakText("Report has been sent successfully popup")}}
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Apply for Replacment</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Your report has been sent successfully
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                    onMouseLeave={() => cancel()} 
                    onMouseEnter={() => {speakText("Close button to close the pop up")}}
                    type="submit" color="secondary" variant="contained" onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ApplyForReplacementDialog
 