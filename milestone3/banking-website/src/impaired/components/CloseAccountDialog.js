import React, { useState } from 'react'
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
import { closeAccount, payBill } from '../../store';
import Avatar from '@mui/material/Avatar';
import { Button, DialogActions, DialogContent, DialogContentText, Slide } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { useTheme } from '@emotion/react';
import { tokens } from '../../themes';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useSpeechSynthesis } from 'react-speech-kit';



const BalanceAvailableDialog = ({ open, handleClose }) => {
  const { speak, cancel } = useSpeechSynthesis();

    const speakText = (text) => {
        speak({ text });
    };
  return (
    <Dialog
    onMouseLeave={() => cancel()} 
    onMouseEnter={() => {speakText("Pop up of closing the account")}}
      open={open}
      // TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className='flex flex-col items-center m-3'>
        <DangerousIcon style={{ color: 'red' }} fontSize='large' />
        <DialogContent
        onMouseEnter={() => {speakText("You need to transfer your money first to another account to be able to close the account. Go to the Transfer tab in the sidebar to the left of the screen.")}}
        onMouseLeave={() => cancel()} 
        >
          <DialogContentText  id="alert-dialog-slide-description">
            You need to transfer your money first to another account to be able to close the account.
            Go to the Transfer tab in the sidebar to the left of the screen.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
          onMouseLeave={() => cancel()} 
          onMouseEnter={() => {speakText("Button to clost the popup")}}
          type="submit" color="secondary" variant="contained" onClick={handleClose}>Ok</Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

const BalanceZeroDialog = ({ open, handleClose, handleCloseIfYes }) => {
  const { speak, cancel } = useSpeechSynthesis();

    const speakText = (text) => {
        speak({ text });
    };
  return (
    <Dialog
    onMouseLeave={() => cancel()} 
    onMouseEnter={() => {speakText("Pop up of closing the account")}}
      open={open}
      // TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className='flex flex-col items-center m-3'>
        <WarningAmberIcon style={{ color: 'yellow' }} fontSize='large' />
        <DialogContent
        onMouseEnter={() => {speakText("Are you sure you want to close the account?")}}
        onMouseLeave={() => cancel()} 
        >
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to close the account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          onMouseLeave={() => cancel()} 
          onMouseEnter={() => {speakText("Press this button to cancel the deletion")}}
          type="submit" sx={{ outline: '2px solid red', color: 'red' }} onClick={handleClose}>No</Button>
          <Button
          onMouseLeave={() => cancel()} 
          onMouseEnter={() => {speakText("Press this button to delete your account")}}
          type="submit" sx={{ outline: '2px solid green', color: 'green' }} onClick={handleCloseIfYes}>Yes</Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

function CloseAccountDialog({ account }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const handleCloseIfYes = () => {
    setOpen(false);
    dispatch(closeAccount({
      accountNumber: account.accountNumber
    }));
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { speak, cancel } = useSpeechSynthesis();

  const speakText = (text) => {
    speak({ text });
  };// Make sure to replace 'tokens' with the actual tokens object
  return (
    <div>
      <Button type="submit" color="secondary" variant="outlined" sx={{ fontSize: 12, color: colors.grey[250] }} onClick={handleClickOpen} onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press here to close this account") }}>
        Close Account
      </Button>
      {account.balance > 0 ?
        <BalanceAvailableDialog open={open} handleClose={handleClose} />
        :
        <BalanceZeroDialog open={open} handleClose={handleClose} handleCloseIfYes={handleCloseIfYes} />
      }
    </div>
  );
}


export default CloseAccountDialog
