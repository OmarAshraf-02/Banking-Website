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


function ApplyForReplacementDialog() {
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
            <Button type="submit" color="secondary" variant="contained" onClick={handleClickOpen}>
                Report
            </Button>
            <Dialog
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
                    <Button type="submit" color="secondary" variant="contained" onClick={handleClose}>Apply</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ApplyForReplacementDialog
 